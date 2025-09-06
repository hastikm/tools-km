import React, { useEffect, useState } from "react";

export const Stars = ({ number = 100 }) => {
  const [starStyles, setStarStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      opacity: Math.random(),
    }));
    setStarStyles(styles);
  }, [number]);

  return (
    <>
      {starStyles.map((style, idx) => (
        <span
          key={idx}
          style={{ ...style }}
          className="absolute rounded-full bg-white"
        />
      ))}
    </>
  );
};
