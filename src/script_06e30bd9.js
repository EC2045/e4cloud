let currentActiveUser = null;
let currentActiveFile = null;

// Live clock for Gateway Gate
function updateGateClock() {
    const clockEl = document.getElementById('gate-sys-time');
    if (clockEl) {
        const now = new Date();
        const year = now.getFullYear() + 19; // Offset for Year 2045
        const dateStr = `${year}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
        const timeStr = now.toLocaleTimeString('ja-JP', { hour12: false });
        clockEl.textContent = `TIME: ${dateStr} ${timeStr}`;
    }
}
setInterval(updateGateClock, 1000);
updateGateClock();

// Check login state on load
window.addEventListener('DOMContentLoaded', () => {
    const isAuth = localStorage.getItem('e4_auth');
    if (isAuth === 'true') {
        showDashboard();
    }
});

function togglePasswordVisibility() {
    const passInput = document.getElementById('access-key');
    const eyeIcon = document.getElementById('eye-icon');
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

function attemptDecryption() {
    const passInput = document.getElementById('access-key');
    const feedback = document.getElementById('decrypt-feedback');
    const password = passInput.value.trim().toLowerCase();
    const config = window.E4_CLOUD_SETTINGS || { validPasswords: ['e4', 'admin'] };

    if (!password) {
        feedback.className = "text-center text-xs h-6 font-bold mono-font text-rose-400";
        feedback.textContent = "KEY REQUIRED";
        return;
    }

    feedback.className = "text-center text-xs h-6 font-bold mono-font text-sky-400 cursor-blink";
    feedback.textContent = "DECRYPTING";

    setTimeout(() => {
        if (config.validPasswords.map(p => p.toLowerCase()).includes(password)) {
            feedback.className = "text-center text-xs h-6 font-bold mono-font text-emerald-400";
            feedback.textContent = "DECRYPT SUCCESS";

            localStorage.setItem('e4_auth', 'true');
            setTimeout(() => {
                showDashboard();
            }, 500);
        } else {
            feedback.className = "text-center text-xs h-6 font-bold mono-font text-rose-400";
            feedback.textContent = "DECRYPT FAILED: ACCESS DENIED";
        }
    }, 800);
}

function showDashboard() {
    document.getElementById('decrypt-gate').classList.add('hidden');
    const dashboard = document.getElementById('storage-dashboard');
    dashboard.classList.remove('hidden');
    dashboard.classList.add('flex');

    // Render dynamic tabs from setting.js
    renderUserTabs();
}

function lockStorage() {
    localStorage.removeItem('e4_auth');
    document.getElementById('access-key').value = '';
    document.getElementById('decrypt-feedback').textContent = '';

    const dashboard = document.getElementById('storage-dashboard');
    dashboard.classList.add('hidden');
    dashboard.classList.remove('flex');
    document.getElementById('decrypt-gate').classList.remove('hidden');
}

// Render Sidebar Tabs from config
function renderUserTabs() {
    const config = window.E4_CLOUD_SETTINGS;
    const container = document.getElementById('user-tabs');
    container.innerHTML = '';

    if (!config || !config.archives) return;

    config.archives.forEach((user, index) => {
        const btn = document.createElement('button');
        btn.id = `tab-btn-${user.id}`;
        btn.onclick = () => switchUserTab(user.id);
        btn.className = `tab-btn flex-1 md:flex-none glass-panel p-5 text-left flex items-center gap-4 border-l-2 border-l-transparent hover:bg-white/5 transition group rounded-r`;

        btn.innerHTML = `
                    <div class="w-8 h-8 rounded-full border flex items-center justify-center text-sm group-hover:scale-105 transition-transform" 
                         style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.1); color: ${user.themeColor};">
                        <i class="${user.icon}"></i>
                    </div>
                    <div>
                        <div class="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Archive #0${index + 1}</div>
                        <div class="text-sm font-bold text-white uppercase tracking-wider">${user.name}</div>
                    </div>
                `;
        container.appendChild(btn);
    });

    // Automatically switch to the first user
    if (config.archives.length > 0) {
        switchUserTab(config.archives[0].id);
    }
}

// Switch Tab, Scan Directories and Render File Tree
async function switchUserTab(userId) {
    currentActiveUser = userId;
    const config = window.E4_CLOUD_SETTINGS;
    const user = config.archives.find(u => u.id === userId);

    // Update Tab Button styles
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => {
        b.style.borderLeftColor = 'transparent';
        b.style.background = 'rgba(9, 9, 11, 0.7)';
    });

    const activeBtn = document.getElementById(`tab-btn-${userId}`);
    if (activeBtn) {
        activeBtn.style.borderLeftColor = user.themeColor;
        activeBtn.style.background = 'rgba(255, 255, 255, 0.03)';
    }

    // Display loading in file tree
    const treeContainer = document.getElementById('file-tree');
    treeContainer.innerHTML = `
                <div class="text-[10px] text-slate-500 tracking-widest font-mono flex items-center gap-2 py-4">
                    <i class="fas fa-spinner animate-spin"></i> SCANNING PHYSICAL /${userId}...
                </div>
            `;

    // Scan directory
    const files = await scanDirectory(userId);
    renderFileTree(user, files);
}

// Auto-scan Physical Directory listing
async function scanDirectory(userId) {
    try {
        // Fetch the directory path
        const response = await fetch(`./${userId}/`);
        if (!response.ok) throw new Error("Directory access block");

        const text = await response.text();

        // Parse the directory index HTML (Python SimpleHTTPServer listing format)
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = doc.querySelectorAll('a');

        const foundFiles = [];
        links.forEach(a => {
            const href = a.getAttribute('href');
            if (!href) return;

            // Decode URI component (handle spaces etc.)
            const decodedHref = decodeURIComponent(href);

            // Filter out parent directory links, folders, hidden files, or setting configs
            if (decodedHref === '../' || decodedHref === '/' || decodedHref.startsWith('.') || decodedHref.endsWith('/')) {
                return;
            }

            // Determine file type by extension
            const ext = decodedHref.substring(decodedHref.lastIndexOf('.')).toLowerCase();
            const isImg = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext);

            foundFiles.push({
                name: `/${userId}/${decodedHref}`,
                realPath: `./${userId}/${decodedHref}`,
                type: isImg ? 'image' : 'text',
                isDummy: false
            });
        });

        return foundFiles;
    } catch (err) {
        console.warn(`[e4cloud] Directory listing failed for /${userId}/, falling back to dynamic instructions.`, err);
        return getDummyFiles(userId);
    }
}

// Fallback guidelines if folders are physically empty or HTTP scanning isn't supported
function getDummyFiles(userId) {
    if (window.E4_CLOUD_SETTINGS && window.E4_CLOUD_SETTINGS.predefinedFiles && window.E4_CLOUD_SETTINGS.predefinedFiles[userId]) {
        return window.E4_CLOUD_SETTINGS.predefinedFiles[userId];
    }
    return [];
}

// Render File Tree list (エクスプローラー)
function renderFileTree(user, files) {
    const treeContainer = document.getElementById('file-tree');
    treeContainer.innerHTML = '';

    // Directory Title
    const dirNode = document.createElement('div');
    dirNode.className = "flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3";
    dirNode.innerHTML = `<i class="far fa-folder-open" style="color: ${user.themeColor};"></i> <span>/${user.id}</span>`;
    treeContainer.appendChild(dirNode);

    if (files.length === 0) {
        // Completely empty fallback
        const emptyNode = document.createElement('div');
        emptyNode.className = "text-[10px] text-slate-600 italic py-2 pl-4";
        emptyNode.textContent = "Directory is empty";
        treeContainer.appendChild(emptyNode);

        // Load empty viewer notice
        const viewerContainer = document.getElementById('viewer-container');
        viewerContainer.innerHTML = `
                    <div class="text-center text-slate-600 py-12">
                        <i class="far fa-folder-open text-5xl mb-4 opacity-40" style="color: ${user.themeColor}; opacity: 0.3;"></i>
                        <p class="text-xs uppercase tracking-[0.2em] font-light">Folder is empty</p>
                        <p class="text-[9px] text-slate-500 mt-2 font-mono">Place .txt or .png files into "e4cloud/${user.id}/"</p>
                    </div>
                `;
        return;
    }

    // File items
    files.forEach(file => {
        const basename = file.name.substring(file.name.lastIndexOf('/') + 1);
        const fileBtn = document.createElement('button');
        fileBtn.id = `file-node-${file.name.replace(/\//g, '_').replace(/\./g, '_')}`;
        fileBtn.onclick = () => selectFile(file, user);
        fileBtn.className = "w-full text-left py-2 px-3 pl-6 text-xs flex items-center justify-between text-slate-400 hover:text-white hover:bg-white/5 transition rounded mono-font";

        let icon = '<i class="far fa-file-alt mr-2 opacity-60"></i>';
        if (file.type === 'image') {
            icon = '<i class="far fa-file-image mr-2 opacity-60"></i>';
        }

        fileBtn.innerHTML = `
                    <span class="flex items-center truncate">${icon} ${basename}</span>
                    <span class="text-[8px] opacity-40 uppercase tracking-tighter">${file.isDummy ? 'virtual' : file.type}</span>
                `;
        treeContainer.appendChild(fileBtn);
    });

    // Auto-select first file in scanned directory
    if (files.length > 0) {
        selectFile(files[0], user);
    }
}

// Select and Decrypt File inside viewer
async function selectFile(file, user) {
    currentActiveFile = file;

    // Highlight in tree list
    const allNodes = document.querySelectorAll('#file-tree button');
    allNodes.forEach(node => {
        node.className = "w-full text-left py-2 px-3 pl-6 text-xs flex items-center justify-between text-slate-400 hover:text-white hover:bg-white/5 transition rounded mono-font";
        node.style.background = 'transparent';
        node.style.color = '';
    });

    const nodeId = `file-node-${file.name.replace(/\//g, '_').replace(/\./g, '_')}`;
    const activeNode = document.getElementById(nodeId);
    if (activeNode) {
        activeNode.style.background = 'rgba(255, 255, 255, 0.05)';
        activeNode.style.color = user.themeColor;
    }

    // Load to Viewer
    const headerTag = document.getElementById('viewer-status-tag');
    const fileTitle = document.getElementById('viewer-file-title');
    const viewerContainer = document.getElementById('viewer-container');

    headerTag.textContent = user.status;
    headerTag.style.borderColor = user.themeColor;
    headerTag.style.color = user.themeColor;
    headerTag.style.background = `rgba(${hexToRgb(user.themeColor)}, 0.1)`;

    fileTitle.textContent = file.name;

    // Render view dynamic content
    viewerContainer.innerHTML = `
                <div class="text-center text-slate-500 py-12 mono-font text-xs cursor-blink">
                    DECRYPTING STREAM...
                </div>
            `;

    try {
        let contentHTML = '';

        if (file.type === 'text') {
            let content = '';
            let isFallback = false;
            try {
                const res = await fetch(file.realPath);
                if (!res.ok) {
                    content = `[E4 CLOUD - FILE NOT FOUND]\n\n指定されたファイルが見つかりません。\nパス: ${file.realPath}\n\n物理ディレクトリ（/e4cloud/）内にファイルを作成すると、ここに自動で表示・同期されます。`;
                    isFallback = true;
                } else {
                    content = await res.text();
                }
            } catch (e) {
                content = `[E4 CLOUD - FETCH FAILED]\n\nファイルの読み込み中にエラーが発生しました。\nパス: ${file.realPath}`;
                isFallback = true;
            }

            contentHTML = `
                        <div class="flex-grow flex flex-col">
                            <div class="bg-black/60 border border-white/5 p-6 rounded flex-grow font-light text-sm text-slate-300 leading-relaxed overflow-y-auto max-h-[450px] whitespace-pre-wrap relative">
                                <div class="absolute top-2 right-2 flex gap-2">
                                    <span class="text-[8px] uppercase tracking-widest font-mono ${isFallback ? 'text-rose-400' : 'text-slate-600'} bg-white/5 px-2 py-0.5 border border-white/10 rounded">${isFallback ? 'NOT_FOUND' : 'PHYSICAL_DECODED'}</span>
                                </div>
                                <div id="text-content-box">${escapeHTML(content)}</div>
                            </div>
                        </div>
                    `;
        } else if (file.type === 'image') {
            contentHTML = `
                        <div class="flex-grow flex flex-col justify-center items-center py-4">
                            <div class="relative max-w-sm w-full aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center rounded">
                                <img src="${file.realPath}" alt="${file.name}" class="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition duration-700" onerror="this.parentElement.innerHTML='<div class=\\'text-slate-700 text-center p-4\\'><i class=\\'fas fa-file-image text-5xl mb-4\\'></i><p class=\\'text-[10px] tracking-widest uppercase\\'>IMAGE_NOT_LOADED<br>Path: ${file.realPath}</p></div>'">
                                <div class="absolute bottom-2 left-2 text-[8px] bg-black/80 text-slate-400 px-2 py-0.5 border border-white/10 font-bold uppercase tracking-widest font-mono">STREAM_SECURED</div>
                            </div>
                            <div class="mt-4 text-center">
                                <p class="text-[10px] text-slate-500 uppercase tracking-widest font-mono">${user.description}</p>
                            </div>
                        </div>
                    `;
        }

        viewerContainer.innerHTML = contentHTML;
    } catch (err) {
        viewerContainer.innerHTML = `
                    <div class="text-center text-rose-400 py-12 mono-font text-xs">
                        <i class="fas fa-triangle-exclamation text-3xl mb-4 block"></i>
                        DECRYPTION PROTOCOL FAILED FOR ${file.name.substring(file.name.lastIndexOf('/') + 1)}
                    </div>
                `;
    }

    // Trigger symbol processing on the viewer container
    if (window.symbols && typeof window.symbols.processNode === 'function') {
        window.symbols.processNode(viewerContainer);
    }
}

// Helper: Hex to RGB Converter
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
}

// Helper: Escape HTML strings
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
