import React from "react";
import Navbar from "../../components/navbar";
import Example from "../../components/example";
import Card from "./Card";
import cards from "./Hjson";

const Home = () => {
  return (
    <Example>
      <Navbar />
      
      <div className="container mx-auto ">
 
        <div className="py-40 flex flex-wrap gap-24 justify-center">
          {cards.map((card) => (
                      <Card
            key={card.id}
            title={card.title}
            icon={card.icon}
            color={card.color}
            shadow={card.shadow}
            routes={card.routes}   // این خط خیلی مهمه
/>
          ))}
        </div>
      </div>

      <div>
        sodfks;f
      </div>
    </Example>
  );
};

export default Home;
