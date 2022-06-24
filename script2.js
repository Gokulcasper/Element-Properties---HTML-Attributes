const nameEl = document.querySelector("#input-delName input");

// You can get attribute value by DOT Notation:
console.log(nameEl.type);
console.log(nameEl.id);
console.log(nameEl.name);
console.log(nameEl.placeholder);

// Modify value:
// nameEl.value = "Gokul";

// const userId = prompt("Enter Your Value");

// It can modify only HTML attribute value: STRING
// nameEl.setAttribute("value", userId);

// It can modify only HTML attribute value: STRING
nameEl.setAttribute("value", 7);
console.log(typeof nameEl.value);

// convert value String into Int:
const ParseValue = parseInt(nameEl.value, 10);
console.log(typeof ParseValue);
