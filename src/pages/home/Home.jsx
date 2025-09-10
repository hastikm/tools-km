// Home.jsx
import React from "react";
import Navbar from "../../components/navbar";
import Example from "../../components/example";
import Card from "./Card";


const Home = () => {
  return (
    <Example>
      <Navbar />
      <div className="container mx-auto">

          <div className="py-40 flex gap-9 ">
              <Card/>
          
          </div>
        
      </div>
    </Example>
    
  );
};

export default Home;
