const HTMLpara = document.getElementById("HTML-text");
const CSSpara = document.getElementById("CSS-text");
const JSpara = document.getElementById("JS-text");

const HTMLbutton = document.getElementById("HTML-button");
const CSSbutton = document.getElementById("CSS-button");
const JSbutton = document.getElementById("JS-button");

const ParaButtonObj = [
  {
    para: HTMLpara,
    button: HTMLbutton,
  },
  {
    para: CSSpara,
    button: CSSbutton,
  },
  {
    para: JSpara,
    button: JSbutton,
  },
];

// Use one method to attach the event listener
window.addEventListener("load", () => {
  onClickTabs(HTMLbutton);
});

HTMLbutton.addEventListener("click", () => {
  onClickTabs(HTMLbutton);
});
CSSbutton.addEventListener("click", (e) => {
  onClickTabs(CSSbutton);
});
JSbutton.addEventListener("click", (e) => {
  onClickTabs(JSbutton);
});

function onClickTabs(tabName) {
  ParaButtonObj.forEach((eachItem) => {
    if (tabName !== eachItem.button) {
      eachItem.button.classList.remove("active");
      eachItem.para.classList.add("invisble");
    } else {
      eachItem.button.classList.add("active");
      eachItem.para.classList.remove("invisble");
    }
  });
}
