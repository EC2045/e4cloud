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
        }
    ]
};
