import { useState, useEffect } from "react";
export default function App() {
  const [isReturnFlight, setisReturnFlight] = useState(false);
  const [travelDate, setTravelDate] = useState({
    departureDate: getTodayDate(),
    returnDate: getTodayDate(),
  });
  function flightOptionSelect(value) {
    if (value === "Twoway") {
      setisReturnFlight(true);
    } else {
      setisReturnFlight(false);
    }
  }
  function getTodayDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month =
      date.getMonth().toString().length > 1
        ? date.getMonth() + 1
        : `0${date.getMonth()}`;
    let day =
      date.getDay().toString().length > 1
        ? date.getDay() + 1
        : `0${date.getDay()}`;
    console.log(`${year}-0${month}-0${day}`, "current");
    return `${date.getFullYear()}-0${date.getMonth()}-0${date.getDay()}`;
  }
  function onChangeFlightDate(option, value) {
    console.log(value, "value");
    if (option === "departure") {
      setTravelDate((prev) => {
        return { ...prev, departureDate: value };
      });
    } else if (option === "return") {
      setTravelDate((prev) => {
        return { ...prev, returnDate: value };
      });
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (isReturnFlight) {
      alert(
        `you have booked a return flight, departure ${travelDate.departureDate} and return on ${travelDate.returnDate}`
      );
    } else {
      alert(`you have only booked one way ${travelDate.departureDate}`);
    }
  }

  useEffect(() => {
    getTodayDate();
  }, []);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <select
        name="flightTypes"
        onChange={(event) => flightOptionSelect(event.target.value)}
      >
        <option value="Oneway">One-way flight</option>
        <option value="Twoway">Retrun flight</option>
      </select>
      <input
        type="date"
        aria-label="Departure date"
        required
        value={travelDate.departureDate}
        min={getTodayDate()}
        onChange={(event) =>
          onChangeFlightDate("departure", event.target.value)
        }
      />
      {isReturnFlight ? (
        <input
          type="date"
          onChange={(event) => onChangeFlightDate("return", event.target.value)}
          value={travelDate.returnDate}
          aria-label="Return date"
          min={travelDate.departureDate}
          required
        />
      ) : (
        ""
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
