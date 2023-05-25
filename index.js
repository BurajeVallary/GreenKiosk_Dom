let body = document.body.style.background = '#808080';
document.getElementById("title").style.color='green';
document.getElementById("tag").style.textTransform='uppercase';
document.getElementById("tagline").style.textTransform='uppercase';

let fruitList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.textContent = "guava";
fruitList.appendChild(newFruit);

let vegetableList = document.getElementById("vegList");
let newVeg = document.createElement("li");
newVeg.textContent = "spinach";
vegetableList.appendChild(newVeg);

