'use client';
import React from "react";
import { Meteors } from "./Meteors";
import { Stars } from "../components/star";

const Example = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden gradient-background">
      <Meteors number={200} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       
      </span>
    </div>

  );
};

export default Example;
