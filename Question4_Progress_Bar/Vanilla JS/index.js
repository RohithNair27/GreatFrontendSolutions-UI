const container = document.getElementById("container");
const button = document.getElementById("addButton");

button.addEventListener("click", (event) => {
  const barContainer = document.createElement("div");
  const bar = document.createElement("div");
  container.appendChild(barContainer);
  barContainer.appendChild(bar);
  barContainer.setAttribute("class", "bar-container");
  bar.setAttribute("class", "bar");
  let percent = 0;
  bar.setAttribute("style", `width:${percent}%`);
  //set timeout here, just for a slight delay after the bar comes
  setTimeout(() => {
    percent += 100;
    bar.style.width = percent + "%";
  }, 100);
});
