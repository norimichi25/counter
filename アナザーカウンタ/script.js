body {
    margin: 0;
    font-family: sans-serif;
    background: #f5f5f5;
}

/* 全体レイアウト（横持ち想定） */
.container {
    display: flex;
    height: 100vh;
}

/* プレイヤーエリア */
.player {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* 中央エリア（10%くらい） */
.center {
    width: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* サイコロ */
.dice-area {
    margin-top: auto;
    margin-bottom: auto;
}

#diceResult {
    font-size: 40px;
    margin: 10px 0;
}

/* リセット */
.reset {
    background: red;
    color: white;
    padding: 5px;
}

/* 上部の色丸 */
.circles {
    display: flex;
    justify-content: space-around;
}

.circle {
    text-align: center;
}

.ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px auto;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 下部ステータス */
.stats {
    display: flex;
    justify-content: space-around;
}

.stat {
    text-align: center;
}

/* ボタン */
button {
    margin: 2px;
}