import { useState, useEffect } from "react";
export default function CardList () {

    const [cards, setCards] = useState([]);
    
      
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("http://localhost:8080/cards");
            const data = await response.json();
            setCards(data);  
          } catch (error) {
            console.error("Failed to fetch cards:", error);
          }
        }
    
        fetchData();  
      }, []); 
      console.log("Fetched cards data:", cards);
    
    return (
      <div>
        {/* Map over the cards array passed as props */}
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id} className="card">
              <h3>{card.card_name}</h3>
              <img src={card.src} alt={card.card_name}  />
              <p>{card.description}</p>
              <p><strong>Level:</strong> {card.level}</p>
            </div>
          ))
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    );
  }