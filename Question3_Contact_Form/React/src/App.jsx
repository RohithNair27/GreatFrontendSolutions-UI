import { useState } from "react";
import { submitForm } from "./utils/submitForm";

function App() {
    const URL= 'https://www.greatfrontend.com/api/questions/contact-form'

  const [inputFields, setInputField] = useState([
    {
      id: 0,
      type: "text",
      placeholder: "Enter your name",
      required: true,
      value: "",
    },
    {
      id: 1,
      type: "text",
      placeholder: "Enter your email",
      required: true,
      value: "",
    },
  ]);
  const [detailsInput, setInputDetails] = useState("");

  async function submitForm(event) {
    event.preventDefault();
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputFields[0].value,
        email: inputFields[1],
        message: detailsInput,
      }),
    });
    const text = await response.text();

    alert(text);
  }

  function onTextChnage(id, value) {
    let array = [...inputFields];
    array[id] = { ...array[id], value: value };
    setInputField(array);
  }

  return (
    <form onSubmit={submitForm}>
      {inputFields.map((input) => (
        <input
          key={input.id}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={(e) => onTextChnage(input.id, e.target.value)}
        />
      ))}
      <textarea
        value={detailsInput}
        onChange={(e) => setInputDetails(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
export default App;
