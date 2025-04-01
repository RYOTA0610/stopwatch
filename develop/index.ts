/*==============================
グローバル変数
==============================*/

//スタートからの経過時間（ミリ秒）
let timeCount: number = 0;
//計測状態（計測中 :true、停止中 :false）
let isRunning: boolean = false;
//タイマー識別ID
let timerID: number = 0;
//カウント表示部
const elmCount: HTMLElement | null = document.querySelector("#count");
//スタートボタン
const elmStart: HTMLElement | null = document.querySelector("#start");
//リセットボタン
const elmReset: HTMLElement | null = document.querySelector("#reset");


/*==============================
イベントハンドラ
==============================*/

//アプリケーション初期化
const onPageLoad = () => {};

//スタート処理
const onStart = () => {};

//リセット処理
const onReset = () => {};


/*==============================
イベントリスナー
==============================*/

//ページの読み込み完了イベント
window.addEventListener("load", onPageLoad);

//スタートボタンのクリックイベント
if (elmStart !== null) {
    elmStart.addEventListener("click", onStart);
}

//リセットボタンのクリックイベント
if (elmReset !== null ) {
    elmReset.addEventListener("click", onReset);
}


/*==============================
ユーザー定義関数
==============================*/
//その他の自作関数を定義する