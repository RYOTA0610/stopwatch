/*==============================
グローバル変数
==============================*/
//スタートからの経過時間（ミリ秒）
let timeCount = 0;
//計測状態（計測中 :true、停止中 :false）
let isRunning = false;
//タイマー識別ID
let timerID = 0;
//カウント表示部
const elmCount = document.querySelector("#count");
//スタートボタン
const elmStart = document.querySelector("#start");
//リセットボタン
const elmReset = document.querySelector("#reset");
/*==============================
イベントハンドラ
==============================*/
//アプリケーション初期化
const onPageLoad = () => {
    //描画を更新
    updateView();
};
//スタート処理
const onStart = () => {
    //停止中の場合
    if (isRunning === false) {
        //タイマーを起動
        startTimer();
    }
    //計測中の場合
    else {
        //タイマーを停止
        stopTimer();
    }
};
//リセット処理
const onReset = () => {
    //タイマーを停止---①
    stopTimer();
    //カウントをリセット---②
    resetCount();
    //描画を更新
    updateView();
};
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
if (elmReset !== null) {
    elmReset.addEventListener("click", onReset);
}
/*==============================
ユーザー定義関数
==============================*/
//描画更新
function updateView() {
    //最大時間を超えない制限
    if (timeCount > 60 * 60 * 1000 - 1) {
        timeCount = 60 * 60 * 1000 - 1;
    }
    //timeCountの値を「分」に直す---①
    const mm = Math.floor(timeCount / 1000 / 60)
        .toString().padStart(2, "0");
    //timeCountの値を「秒」に直す---②
    const ss = (Math.floor(timeCount / 1000) % 60)
        .toString().padStart(2, "0");
    //timeCountの値を「ミリ秒」に直す---③
    const ms = (timeCount % 1000)
        .toString().padStart(3, "0").slice(0, 2);
    //①②③をつないで「分：秒 ミリ秒」の形式にする---④
    const count = mm + ":" + ss + "<small>" + ms + "</small>";
    //カウント表示部に④を表示する---⑤
    if (elmCount !== null) {
        elmCount.innerHTML = count;
    }
}
//計測スタート
function startTimer() {
    //指定された時間ごとにカウントを更新---①
    timerID = setInterval(() => {
        //経過時間を加算
        timeCount += 10;
        //描画を更新
        updateView();
    }, 10);
    //計測状態を「計測中」に変更---②
    isRunning = true;
}
//計測ストップ
function stopTimer() {
    //タイマーを停止---①
    clearInterval(timerID);
    //計測状態を「停止中」に変更---②
    isRunning = false;
}
//カウントをリセット
function resetCount() {
    //経過時間を初期化
    timeCount = 0;
}
