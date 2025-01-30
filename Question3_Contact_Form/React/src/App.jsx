import { useState } from "react";
import { submitForm } from "./utils/submitForm";

function App() {
  const URL = "https://www.greatfrontend.com/api/questions/contact-form";

  const input = [
    {
      id: 1,
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      id: 2,
      type: "text",
      placeholder: "Enter your email",
      required: true,
    },
  ];

  const [inputFields, setInputField] = useState({
    name: "",
    email: "",
    details: "",
  });

  async function submitForm(event) {
    event.preventDefault();
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputFields.name,
        email: inputFields.email,
        message: inputFields.details,
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
