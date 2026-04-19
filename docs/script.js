let counts = {};
let initialValues = {};

// ===== 左右共通のブロック生成 =====
function createCounter(id, label, initial, step, size = "normal", color = "black") {
  counts[id] = initial;
  initialValues[id] = initial;

  const box = document.createElement("div");

  const sizeClass = (size === "small") ? "small" : "";

  box.innerHTML = `
    <button class="btn_add ${sizeClass} top" onclick="add('${id}', ${step})">＋${step}</button>
    <div class="text">${label}</div>
    <div class="count ${sizeClass}" id="${id}" style="color:${color}">${initial}</div>
    <button class="btn_sub ${sizeClass} " onclick="sub('${id}', ${step})">ー${step}</button>
  `;

  return box;
}

// ===== 左右に配置 =====
const left = document.getElementById("left");
const right = document.getElementById("right");
left.appendChild(createCounter("count_lt_1", "", 0, 1, "small", "red"));
left.appendChild(createCounter("count_lt_2", "", 0, 1, "small", "blue"));
left.appendChild(createCounter("count_lt_3", "", 0, 1, "small", "green"));
left.appendChild(createCounter("count_lt_4", "", 0, 1, "small", "yellow"));
left.appendChild(createCounter("count_lt_sl", "盾", 0, 10, "normal", "black"));
left.appendChild(createCounter("count_lt_df", "防", 0, 10, "normal", "black"));
left.appendChild(createCounter("count_lt_mp", "〇", 0, 1, "normal", "black"));
left.appendChild(createCounter("count_lt_hp", "HP", 180, 10, "normal", "black"));

right.appendChild(createCounter("count_rt_1", "", 0, 1, "small", "yellow"));
right.appendChild(createCounter("count_rt_2", "", 0, 1, "small", "green"));
right.appendChild(createCounter("count_rt_3", "", 0, 1, "small", "blue"));
right.appendChild(createCounter("count_rt_4", "", 0, 1, "small", "red"));
right.appendChild(createCounter("count_rt_hp", "HP", 180, 10, "normal", "black"));
right.appendChild(createCounter("count_rt_mp", "〇", 0, 1, "normal", "black"));
right.appendChild(createCounter("count_rt_df", "防", 0, 10, "normal", "black"));
right.appendChild(createCounter("count_rt_sl", "盾", 0, 10, "normal", "black"));




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