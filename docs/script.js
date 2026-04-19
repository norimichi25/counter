let counts = {};
let initialValues = {};

// ===== 左右共通のブロック生成 =====
function createCounter(id, label, initial, step) {
  counts[id] = initial;
  initialValues[id] = initial; 

  const box = document.createElement("div");

  box.innerHTML = `
    <button class="btn" onclick="add('${id}', ${step})">＋${step}</button>
    <div class="count">${label}</div>
    <div class="count" id="${id}">${initial}</div>
    <button class="btn" onclick="sub('${id}', ${step})">ー${step}</button>
  `;

  return box;
}

// ===== 左右に配置 =====
const left = document.getElementById("left");
const right = document.getElementById("right");
left.appendChild(createCounter("count_lt_2", "〇", 0, 1));
left.appendChild(createCounter("count_lt_1", "HP", 180, 10));

right.appendChild(createCounter("count_rt_1", "HP", 180, 10));
right.appendChild(createCounter("count_rt_2", "〇", 0, 1));




// let counts = {
//   count1: 0,
//   count2: 0
// };

function update(id) {
  document.getElementById(id).innerText = counts[id];
}

function add(id, num) {
  counts[id] += num;
  update(id);
}

function sub(id, num) {
  counts[id] -= num;
  update(id);
}

function reset() {
  for (let id in counts) {
    counts[id] = initialValues[id];
    update(id);
  }
}

function dice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceResult").innerText = "🎲 " + result;
}