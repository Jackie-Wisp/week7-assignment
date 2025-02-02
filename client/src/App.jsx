import { useState, useEffect } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";

export default function App() {
  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/cards");

  }
  return (
    <>
      <h1>App</h1>
      <Form />
    </>
  );
}
