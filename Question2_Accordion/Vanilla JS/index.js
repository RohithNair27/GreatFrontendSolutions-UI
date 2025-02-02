let hidden_one = false;
let hidden_two = false;
let hidden_three = false;

const htmlHeader = document.getElementById("html-header");
const cssHeader = document.getElementById("css-header");
const jsHeader = document.getElementById("javascript-header");

const spanElementOne = document.querySelector(".header-body-one");
const spanElementTwo = document.querySelector(".header-body-two");
const spanElementThree = document.querySelector(".header-body-three");

function onClick(header, spanElement, icon, hidden) {
  console.log("clicked", hidden);
  const getIconClass = document.querySelector(`.accordion-icon.${icon}`);
  if (hidden) {
    const span = document.createElement("span");
    span.append(spanElement);
    header.append(span);
    getIconClass.classList.remove("accordion-icon--rotated");
    if (icon === "one") {
      hidden_one = false;
    } else if (icon === "two") {
      hidden_two = false;
    } else {
      hidden_three = false;
    }
  } else {
    spanElement.remove();
    getIconClass.classList.add("accordion-icon--rotated");
    if (icon === "one") {
      hidden_one = true;
    } else if (icon === "two") {
      hidden_two = true;
    } else {
      hidden_three = true;
    }
  }
}

htmlHeader.addEventListener("click", () => {
  onClick(htmlHeader, spanElementOne, "one", hidden_one);
});
cssHeader.addEventListener("click", () => {
  onClick(cssHeader, spanElementTwo, "two", hidden_two);
});
jsHeader.addEventListener("click", () => {
  onClick(jsHeader, spanElementThree, "three", hidden_three);
});
