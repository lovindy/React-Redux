import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import { motion } from "framer-motion";
import menu from "./svg/menu.png";
import heart from "./svg/heart.svg";

const animalKeys = ["kdam", "trey", "kla", "klok", "pkorng", "mon"]; // Ensure these match keys in pngMap
function getRandomAnimals() {
  const selectedAnimals = [];

  while (selectedAnimals.length < 3) {
    const randomIndex = Math.floor(Math.random() * animalKeys.length);
    selectedAnimals.push(animalKeys[randomIndex]);
  }

  return selectedAnimals;
}

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setAnimals([...animals, ...getRandomAnimals()]);
  };

  const handleClickHeart = () => {
    setClick(click + 1);
  };

  const handleReset = () => {
    setAnimals([]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-20 gap-8">
      <img
        onClick={handleClickHeart}
        src={heart}
        alt="heart svg"
        style={{ width: 10 + 10 * click }}
      />
      <button
        onClick={handleReset}
        className="text-white bg-red-500 px-2 py-1 rounded-full">
        Reset
      </button>
      <button
        onClick={handleClick}
        className="text-white bg-teal-500 px-2 py-1 rounded-full">
        Generate The Kla Klok
      </button>
      <div>
        <img
          className="border-2 border-teal-500 p-4 rounded-xl shadow-xl"
          src={menu}
          alt=""
        />
      </div>
      <motion.div className="flex w-[545px] h-[200px] items-center justify-center gap-12 border-teal-500 border-2 p-8 rounded-xl shadow-xl">
        {animals.map((animal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5, delay: index * 0.5 }} // Delay each animation by 0.5 seconds more than the previous one
          >
            <AnimalShow type={animal} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default App;
