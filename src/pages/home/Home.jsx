import React from "react";
import Navbar from "../../components/navbar";
import Example from "../../components/example";
import Card from "./Card";
import cards from "./Hjson";

const Home = () => {
  return (
    <Example>
      <Navbar />
      <div className="container mx-auto min-h-screen flex flex-col">
        <div className="flex flex-wrap gap-24 justify-center mt-40 mb-80">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              icon={card.icon}
              color={card.color}
              shadow={card.shadow}
            />
          ))}
        </div>
      </div>
    </Example>
  );
};

export default Home;
