/**
 * e4cloud/setting.js - ユーザーメタデータ定義ファイル
 * 
 * アカウントのテーマカラーやステータスなどのメタデータのみを一元管理します。
 * フォルダ内の実際のファイルは、物理ディレクトリ（./aria/, ./may/, ./syuren/）から
 * index.htmlが起動時にリアルタイムに自動スキャン・Fetchして読み込みます。
 */

window.E4_CLOUD_SETTINGS = {
    // パスワードリスト
    validPasswords: ['admin', 'e4', '2045', 'r', 'aria', 'may', 'syuren', 'onva', 'wac', 'litaran', 'rittsu', 'rituto', 'Shun_00', 'murinsu', 'kgar'],

    // アーカイブアカウントのメタデータ
    archives: [
        {
            id: 'ts',
            name: 'T.S.',
            icon: 'fas fa-question',
            color: 'pink',
            themeColor: '#ff3366',
            avatar: 'ts.png',
            status: 'IDENTITY_UNCERTAIN',
            description: '架空疑問展・和音王国（自称）管理者 T.S. のアーカイブ'
        },
        {
            id: 'aria',
            name: 'Aria (アリア)',
            icon: 'fas fa-fingerprint',
            color: 'sky',
            themeColor: '#38bdf8',
            avatar: 'aria.png',
            status: 'HIGHLY_RESTRICTED',
            description: 'WAC内部情報とシステム監査ログ'
        },
        {
            id: 'may',
            name: 'May (メイ)',
            icon: 'fas fa-paw',
            color: 'rose',
            themeColor: '#f43f5e',
            avatar: 'may.png',
            status: 'DECRYPTION_OK',
            description: 'ウォーウルフの少女メイの個人同期データ（りっつーと共同生活）'
        },
        {
            id: 'syuren',
            name: 'Syuren (シュレン)',
            icon: 'fas fa-screwdriver-wrench',
            color: 'amber',
            themeColor: '#f59e0b',
            avatar: 'syuren.png',
            status: 'HIGHLY_STABLE',
            description: '職人シュレンの技術研究データ'
        },
        {
            id: 'evil',
            name: 'Evil (エビル)',
            icon: 'fas fa-book',
            color: 'indigo',
            themeColor: '#6366f1',
            avatar: 'evil.png',
            status: 'STUDENT_LOG',
            description: '13歳のウォーウルフの学生・生物図鑑作成者'
        },
        {
            id: 'vincent',
            name: 'Vincent (ヴィンセント)',
            icon: 'fas fa-code',
            color: 'slate',
            themeColor: '#64748b',
            avatar: 'vincent.png',
            status: 'LANGUAGE_BUREAU',
            description: 'ONVA中央言語局・主任研究員。極度の論理至上主義者。'
        },
        {
            id: 'zero',
            name: 'Zero (ゼロ)',
            icon: 'fas fa-traffic-light',
            color: 'yellow',
            themeColor: '#facc15',
            avatar: 'zero.png',
            status: 'TRAFFIC_CONTROL_SYS',
            description: '物理体を持たないバイナリ生命体・交通制御システム。'
        },
        {
            id: 'felix',
            name: 'Felix (フェリックス)',
            icon: 'fas fa-shop',
            color: 'purple',
            themeColor: '#a855f7',
            avatar: 'felix.png',
            status: 'ANTIQUE_SHOP',
            description: '200歳以上のアンティークショップ店主。常に霧をまとっている。'
        },
        {
            id: 'noah',
            name: 'Noah (ノア)',
            icon: 'fas fa-plug',
            color: 'blue',
            themeColor: '#3b82f6',
            avatar: 'noah.png',
            status: 'ENERGY_AI',
            description: 'エネルギー配分最適化AI。無駄な電力を物理的に排除する。'
        },
        {
            id: 'kai',
            name: 'Kai (カイ)',
            icon: 'fas fa-ear-listen',
            color: 'orange',
            themeColor: '#f97316',
            avatar: 'kai.png',
            status: 'MACHINE_LINGUIST',
            description: '61歳の人間。機械と話しすぎて相槌が電子音になった言語学者。'
        },
        {
            id: 'karen',
            name: 'Karen (カレン)',
            icon: 'fas fa-cubes',
            color: 'pink',
            themeColor: '#ec4899',
            avatar: 'karen.png',
            status: 'VIRTUAL_DESIGNER',
            description: '21歳の人間・仮想空間設計士。現実の物理法則を「面倒」と感じている。'
        },
        {
            id: 'maria',
            name: 'Maria (マリア)',
            icon: 'fas fa-pen-clip',
            color: 'emerald',
            themeColor: '#10b981',
            avatar: 'maria.png',
            status: 'WAC_RECORDER',
            description: '11歳の人間・WAC記録官。何でもメモを取る記録魔。'
        },
        {
            id: 'yuris',
            name: 'Yuris (ユリス)',
            icon: 'fas fa-database',
            color: 'cyan',
            themeColor: '#06b6d4',
            avatar: 'yuris.png',
            status: 'MEMORY_LIBRARIAN',
            description: 'バイナリ・記憶保管庫の司書。嬉しいと発光パターンが変わる。'
        },
        {
            id: 'bart',
            name: 'Bart (バルト)',
            icon: 'fas fa-leaf',
            color: 'green',
            themeColor: '#22c55e',
            avatar: 'bart.png',
            status: 'FARM_MANAGER',
            description: 'ONVA中央農園・管理官（メイの父親）'
        },
        {
            id: 'rittsu',
            name: 'Rittsu (りっつー)',
            icon: 'fas fa-laptop-code',
            color: 'orange',
            themeColor: '#f97316',
            avatar: 'rittsu.png',
            status: 'UNOFFICIAL_ACCESS',
            description: 'フリーランスハッカー・Same-Art Writer R'
        },
        {
            id: 'litaran',
            name: 'Litaran (リタラン)',
            icon: 'fas fa-terminal',
            color: 'zinc',
            themeColor: '#71717a',
            avatar: 'litaran.png',
            status: 'LEGACY_DATA',
            description: '初代 Same-Art Writer R（りっつーの父親）の遺したログ'
        },
        {
            id: 'ajen',
            name: 'Ajen (ア゛ジェン)',
            icon: 'fas fa-bolt',
            color: 'teal',
            themeColor: '#14b8a6',
            avatar: 'ajen.png',
            status: 'STUDENT_LOG',
            description: '17歳のウォーウルフの学生。考えるよりも直感で行動する。'
        },
        {
            id: 'shakan',
            name: 'Shakan (シャカン)',
            icon: 'fas fa-music',
            color: 'cyan',
            themeColor: '#06b6d4',
            avatar: 'shakan.png',
            status: 'MUSICIAN_LOG',
            description: '38歳のウォーウルフの音楽家。ボーカロイドより正確な音程で歌う。'
        }, {
            id: 'rituto',
            name: 'Ritsuto (りつと)',
            icon: 'fas fa-bolt',
            color: 'orange',
            themeColor: '#f97316',
            avatar: 'rituto.png',
            status: 'GOD',
            description: '暇つぶしでアクセスしたこの世界の創造主のうちの一人'
        },
    ],

    // 物理フォルダが空の場合やスキャンに失敗したときに表示するデフォルトのファイル構成
    predefinedFiles: {
        aria: [
            { name: `/aria/WAC_System_Audit_Report.log`, type: 'text', realPath: 'aria/WAC_System_Audit_Report.log' },
            { name: `/aria/personal_memo.txt`, type: 'text', realPath: 'aria/personal_memo.txt' },
            { name: `/aria/aria_observed_data.txt`, type: 'text', realPath: 'aria/aria_observed_data.txt' },
            { name: `/aria/book_design_ideas.txt`, type: 'text', realPath: 'aria/book_design_ideas.txt' },
            { name: `/aria/textbook_design_log.txt`, type: 'text', realPath: 'aria/textbook_design_log.txt' },
            { name: `/aria/childhood_friend_memo.txt`, type: 'text', realPath: 'aria/childhood_friend_memo.txt' },
            { name: `/aria/god_encounter_log.txt`, type: 'text', realPath: 'aria/god_encounter_log.txt' },
            { name: `/aria/aria.png`, type: 'image', realPath: 'aria/aria.png' }
            //true.txtはあえて表示しない
        ],
        may: [
            { name: `/may/rittsu_and_home.txt`, type: 'text', realPath: 'may/rittsu_and_home.txt' },
            { name: `/may/lupine_sensory_log.txt`, type: 'text', realPath: 'may/lupine_sensory_log.txt' },
            { name: `/may/midnight_snack.txt`, type: 'text', realPath: 'may/midnight_snack.txt' },
            { name: `/may/potato_delivery.txt`, type: 'text', realPath: 'may/potato_delivery.txt' },
            { name: `/may/secret_training.txt`, type: 'text', realPath: 'may/secret_training.txt' },
            { name: `/may/past.txt`, type: 'text', realPath: 'may/past.txt' },
            { name: `/may/may.png`, type: 'image', realPath: 'may/may.png' }
        ],
        syuren: [
            { name: `/syuren/Waon_Protocol_Analysis.log`, type: 'text', realPath: 'syuren/Waon_Protocol_Analysis.log' },
            { name: `/syuren/engineering_notes.txt`, type: 'text', realPath: 'syuren/engineering_notes.txt' },
            { name: `/syuren/broadcast_log.txt`, type: 'text', realPath: 'syuren/broadcast_log.txt' },
            { name: `/syuren/human_observation.txt`, type: 'text', realPath: 'syuren/human_observation.txt' },
            { name: `/syuren/syuren.png`, type: 'image', realPath: 'syuren/syuren.png' } // 画像は追加されたら表示される
        ],
        ts: [
            { name: `/ts/daily_log.txt`, type: 'text', realPath: 'ts/daily_log.txt' },
            { name: `/ts/archive_log.txt`, type: 'text', realPath: 'ts/archive_log.txt' },
            { name: `/ts/art_and_binary.txt`, type: 'text', realPath: 'ts/art_and_binary.txt' },
            { name: `/ts/ts.png`, type: 'image', realPath: 'ts/ts.png' } // 画像は追加されたら表示される
        ],
        evil: [
            { name: `/evil/encyclopedia_notes.txt`, type: 'text', realPath: 'evil/encyclopedia_notes.txt' },
            { name: `/evil/school_life.txt`, type: 'text', realPath: 'evil/school_life.txt' },
            { name: `/evil/evil.png`, type: 'image', realPath: 'evil/evil.png' }
        ],
        bart: [
            { name: `/bart/potato_farming_log.txt`, type: 'text', realPath: 'bart/potato_farming_log.txt' },
            { name: `/bart/about_may.txt`, type: 'text', realPath: 'bart/about_may.txt' },
            { name: `/bart/bart.png`, type: 'image', realPath: 'bart/bart.png' }
        ],
        rittsu: [
            { name: `/rittsu/memo_about_may.txt`, type: 'text', realPath: 'rittsu/memo_about_may.txt' },
            { name: `/rittsu/about_z_sand.txt`, type: 'text', realPath: 'rittsu/about_z_sand.txt' },
            { name: `/rittsu/encounter_with_aria.txt`, type: 'text', realPath: 'rittsu/encounter_with_aria.txt' },
            { name: `/rittsu/rittsu.png`, type: 'image', realPath: 'rittsu/rittsu.png' }
        ],
        litaran: [
            { name: `/litaran/legacy_memo.txt`, type: 'text', realPath: 'litaran/legacy_memo.txt' },
            { name: `/litaran/litaran.png`, type: 'image', realPath: 'litaran/litaran.png' }
        ],
        ajen: [
            { name: `/ajen/action_log.txt`, type: 'text', realPath: 'ajen/action_log.txt' },
            { name: `/ajen/ajen.png`, type: 'image', realPath: 'ajen/ajen.png' }
        ],
        shakan: [
            { name: `/shakan/music_creation_log.txt`, type: 'text', realPath: 'shakan/music_creation_log.txt' },
            { name: `/shakan/shakan.png`, type: 'image', realPath: 'shakan/shakan.png' }
        ],
        vincent: [
            { name: `/vincent/binary_memos.txt`, type: 'text', realPath: 'vincent/binary_memos.txt' },
            { name: `/vincent/vincent.png`, type: 'image', realPath: 'vincent/vincent.png' }
        ],
        zero: [
            { name: `/zero/traffic_log.txt`, type: 'text', realPath: 'zero/traffic_log.txt' },
            { name: `/zero/zero.png`, type: 'image', realPath: 'zero/zero.png' }
        ],
        felix: [
            { name: `/felix/antique_shop_log.txt`, type: 'text', realPath: 'felix/antique_shop_log.txt' },
            { name: `/felix/felix.png`, type: 'image', realPath: 'felix/felix.png' }
        ],
        noah: [
            { name: `/noah/power_optimization.txt`, type: 'text', realPath: 'noah/power_optimization.txt' },
            { name: `/noah/noah.png`, type: 'image', realPath: 'noah/noah.png' }
        ],
        kai: [
            { name: `/kai/machine_language_research.txt`, type: 'text', realPath: 'kai/machine_language_research.txt' },
            { name: `/kai/kai.png`, type: 'image', realPath: 'kai/kai.png' }
        ],
        karen: [
            { name: `/karen/virtual_space_design.txt`, type: 'text', realPath: 'karen/virtual_space_design.txt' },
            { name: `/karen/karen.png`, type: 'image', realPath: 'karen/karen.png' }
        ],
        maria: [
            { name: `/maria/wac_record_log.txt`, type: 'text', realPath: 'maria/wac_record_log.txt' },
            { name: `/maria/maria.png`, type: 'image', realPath: 'maria/maria.png' }
        ],
        yuris: [
            { name: `/yuris/memory_vault_log.txt`, type: 'text', realPath: 'yuris/memory_vault_log.txt' },
            { name: `/yuris/yuris.png`, type: 'image', realPath: 'yuris/yuris.png' }
        ],
        rituto: [
            { name: `/rituto/first.txt`, type: 'text', realPath: 'rituto/first.txt' },
            { name: `/rituto/rituto.png`, type: 'image', realPath: 'rituto/rituto.png' }
        ]
    }
};
