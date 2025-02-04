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
        //^ related to fetch request, do not fully understand but noted to research later, related to turning data into a json 

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

            <label htmlFor="src">Image URL: </label>
            <input
            type="text"
            id="src"
            name="src"
            placeholder="Enter Image URL"
            required
            onChange={handleChangeFormValues}
            value={formValues.src}
            />

        <label htmlFor="description">Description: </label>
        <input
          id="description"
          name="description"
          placeholder="Enter card description"
          required
          onChange={handleChangeFormValues}
          value={formValues.description}
        />

        <label htmlFor="level">Level: </label>
        <input
          type="number"
          id="level"
          name="level"
          placeholder="Enter card level"
          required
          onChange={handleChangeFormValues}
          value={formValues.level}
        />

        <button type="submit">Submit Card</button>
      </form>
    </>
  );
}
