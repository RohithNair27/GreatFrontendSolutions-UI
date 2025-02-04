const HTMLpara = document.getElementById("HTML-text");
const CSSpara = document.getElementById("CSS-text");
const JSpara = document.getElementById("JS-text");

const HTMLbutton = document.getElementById("HTML-button");
const CSSbutton = document.getElementById("CSS-button");
const JSbutton = document.getElementById("JS-button");

function onClikButton() {}

// Use one method to attach the event listener
window.addEventListener("load", () => {
  HTMLpara.classList.remove("invisble");
  CSSpara.classList.add("invisble");
  JSpara.classList.add("invisble");

  HTMLbutton.classList.add("active");
  CSSbutton.classList.remove("active");
  JSbutton.classList.remove("active");
});

HTMLbutton.addEventListener("click", (e) => {
  e.preventDefault();
  HTMLpara.classList.remove("invisble");
  CSSpara.classList.add("invisble");
  JSpara.classList.add("invisble");

  HTMLbutton.classList.add("active");
  CSSbutton.classList.remove("active");
  JSbutton.classList.remove("active");
});
CSSbutton.addEventListener("click", (e) => {
  e.preventDefault();
  HTMLpara.classList.add("invisble");
  CSSbutton.classList.add("active");
  CSSpara.classList.remove("invisble");
  JSpara.classList.add("invisble");

  HTMLbutton.classList.remove("active");
  CSSbutton.classList.add("active");
  JSbutton.classList.remove("active");
});
JSbutton.addEventListener("click", (e) => {
  e.preventDefault();
  HTMLpara.classList.add("invisble");
  CSSpara.classList.add("invisble");
  JSpara.classList.remove("invisble");

  HTMLbutton.classList.remove("active");
  CSSbutton.classList.remove("active");
  JSbutton.classList.add("active");
});
