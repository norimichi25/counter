let counts = {
  count1: 0,
  count2: 0
};

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
  counts.count1 = 0;
  counts.count2 = 0;
  update("count1");
  update("count2");
}

function dice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceResult").innerText = "🎲 " + result;
}