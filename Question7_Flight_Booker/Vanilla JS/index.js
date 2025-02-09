const departure = document.getElementById("departure");
const returnFlight = document.getElementById("return");
const flightOption = document.getElementById("flight-options");
const from = document.getElementById("the-form");
const parentElement = document.querySelector(".input-container");

let departureDate = null;
let returnFlightDate = null;

function getCurrentTime() {
  const date = new Date();
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

  return `${year}-${month}-${day}`;
}
window.addEventListener("load", () => {
  departure.setAttribute("value", getCurrentTime());
  departure.setAttribute("min", getCurrentTime());
  departureDate = getCurrentTime();
});
flightOption.addEventListener("change", (event) => {
  let childElement = document.createElement("label");
  const element = document.createElement("input");
  if (event.target.value === "both-way") {
    element.type = "date";
    element.id = "return";
    element.required = true;
    parentElement.appendChild(element);
    const returnFlight = document.getElementById("return");
    returnFlight.setAttribute("value", getCurrentTime());
    returnFlight.setAttribute("min", departureDate);
  } else {
    /* calling this here because, this is not react, once 
    the code runs and if it finds no node on top, 
    it will retun null hence called the document here*/
    const returnFlight = document.getElementById("return");
    // we can directly remove an node here.
    returnFlight.remove();
  }
});
from.addEventListener("submit", (event) => {
  event.preventDefault();
  if (returnFlightDate !== null) {
    alert(
      `you have booked a return flight, departure ${departureDate} and return on ${returnFlightDate}`
    );
    returnFlight = null;
    departureDate = null;
  } else {
    alert(`you have only booked one way ${departureDate}`);
  }
});
departure.addEventListener("change", (event) => {
  departureDate = event.target.value;
});

parentElement.addEventListener("change", (event) => {
  if (event.target.id === "return") {
    returnFlightDate = event.target.value;
  }
});
