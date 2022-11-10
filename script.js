// 1. event handle inlineHTML
const p3 = document.querySelector(".p3");
function ubahWarna() {
  if (p3.toggleAttribute("style")) {
    p3.style.backgroundColor = "lightblue";
  }
}

// 2. event handler element method
const p2 = document.querySelector(".p2");
function ubahWarna2() {
  if (p2.toggleAttribute("style")) {
    p2.style.backgroundColor = "lightblue";
  }
}
p2.onclick = ubahWarna2;

// 3.event listener
const p4 = document.getElementsByTagName("p")[3];
const ul = document.querySelector("section#b ul");
p4.addEventListener("click", function () {
  const li = document.createElement("li");
  const textItem = document.createTextNode("New Item");
  li.appendChild(textItem);
  ul.appendChild(li);
});
const p5 = document.getElementsByTagName("p")[4];
p5.addEventListener("click", function () {
  ul.removeChild(ul.lastChild);
});
