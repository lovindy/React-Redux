import React from "react";
import Button from "./pages/ButtonPage";
import Accordion from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";

function App() {
  return (
    <div className="flex flex-col">
      <Button />
      <Accordion />
      <DropDownPage />
    </div>
  );
}

export default App;
