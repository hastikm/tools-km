'use client';
import React from "react";
import { Meteors } from "./Meteors";


const Example = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black gradient-background">
      <Meteors number={200} />
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default Example;