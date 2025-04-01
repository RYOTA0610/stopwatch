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
//イベントハンドラを定義する
/*==============================
イベントリスナー
==============================*/
//イベントリスナーを設定する
/*==============================
ユーザー定義関数
==============================*/
//その他の自作関数を定義する