import React, { useState } from "react";
import Card from "./card";
import "../../assets/styles/cardContainer.css";

const cardData = [
  { label: "Roadmap planning", icon: "roadmap" },
  { label: "Feature backlog", icon: "feature" },
  { label: "Sprint management", icon: "sprint" },
  { label: "Retrospective", icon: "retrospective" },
  { label: "Bug tracking", icon: "bug" },
  { label: "Project management", icon: "project" },
  { label: "Release plan", icon: "release" },
];

const CardContainer: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleSelect = (index: number) => {
    const newSelectedCards = [...selectedCards];
    newSelectedCards[index] = !newSelectedCards[index];
    setSelectedCards(newSelectedCards);
  };

  return (
    <div className="container card-container">
      <div className="row">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="col-6 col-md-6 col-lg-3 mb-4 card-warpper"
          >
            <Card
              label={card.label}
              icon={card.icon}
              selected={selectedCards[index]}
              onClick={() => toggleSelect(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
