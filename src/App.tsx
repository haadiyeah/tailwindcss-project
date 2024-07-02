import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";

const App = () => {
  return (
    <>
      <div className="pt-4 lg:pt-5 overflow-hidden">
        <Header />
        <Hero />
      </div>

    </>
  );
};

export default App;
