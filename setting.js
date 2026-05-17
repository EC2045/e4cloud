/**
 * e4cloud/setting.js - ユーザーメタデータ定義ファイル
 * 
 * アカウントのテーマカラーやステータスなどのメタデータのみを一元管理します。
 * フォルダ内の実際のファイルは、物理ディレクトリ（./aria/, ./may/, ./syuren/）から
 * index.htmlが起動時にリアルタイムに自動スキャン・Fetchして読み込みます。
 */

window.E4_CLOUD_SETTINGS = {
    // パスワードリスト
    validPasswords: ['admin', 'e4', '2045', 'r', 'aria', 'may', 'syuren', 'onva', 'wac', 'litaran', 'rittsu', ''],

    // アーカイブアカウントのメタデータ
    archives: [
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
            id: 'bart',
            name: 'Bart (バルト)',
            icon: 'fas fa-leaf',
            color: 'green',
            themeColor: '#22c55e',
            avatar: 'bart.png',
            status: 'FARM_MANAGER',
            description: 'ONVA中央農園・管理官（メイの父親）'
        }
    ],

    // 物理フォルダが空の場合やスキャンに失敗したときに表示するデフォルトのファイル構成
    predefinedFiles: {
        aria: [
            { name: `/aria/WAC_System_Audit_Report.log`, type: 'text', realPath: 'aria/WAC_System_Audit_Report.log' },
            { name: `/aria/personal_memo.txt`, type: 'text', realPath: 'aria/personal_memo.txt' },
            { name: `/aria/aria_observed_data.txt`, type: 'text', realPath: 'aria/aria_observed_data.txt' },
            { name: `/aria/book_design_ideas.txt`, type: 'text', realPath: 'aria/book_design_ideas.txt' },
            { name: `/aria/aria.png`, type: 'image', realPath: 'aria/aria.png' }
        ],
        may: [
            { name: `/may/rittsu_and_home.txt`, type: 'text', realPath: 'may/rittsu_and_home.txt' },
            { name: `/may/lupine_sensory_log.txt`, type: 'text', realPath: 'may/lupine_sensory_log.txt' },
            { name: `/may/midnight_snack.txt`, type: 'text', realPath: 'may/midnight_snack.txt' },
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
        ]
    }
};
