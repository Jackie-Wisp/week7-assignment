import { useState } from "react";

export default function Form() {
    const [formValues, setFormValues] = useState({
      card_name: "",
      src: "",
      description:"",
      level: "",
    });

    function handleChangeFormValues(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:8080/add-card", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(formValues),
        });
        console.log(formValues);

        const data = await response.json();
        console.log(data.message);

        setFormValues({
            card_name: "",
            src: "",
            description: "",
            level: "",
          });
    }

    return (
        <>
        <h2>Add a HERO Card!</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="card_name">Card Name: </label>
            <input
            type="text"
            id="card_name"
            name="card_name"
            placeholder="Enter Hero Card name"
            required
            onChange={handleChangeFormValues}
            value={formValues.card_name}
            />

        <button type="submit">Submit Card</button>
      </form>
    </>
  );
}
