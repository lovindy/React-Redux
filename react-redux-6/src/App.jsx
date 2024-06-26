import React from "react";
import Button from "./pages/ButtonPage";
import Accordion from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import NavigationPage from "./pages/NavigationPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import SamplePage from "./pages/CounterPage";
import CounterReducerPage from "./pages/CounterReducerPage";
function App() {
  return (
    <div className="flex gap-12 mt-20">
      <Sidebar />
      <div className="bg-gray-100 p-6 shadow-xl rounded-xl">
        <Route path="/button">
          <Button />
        </Route>
        <Route path="/accordion">
          <Accordion />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/navigation">
          <NavigationPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <SamplePage initialCount={10} />
        </Route>
        <Route path="/counterReducer">
          <CounterReducerPage initialCount={15} />
        </Route>
      </div>
    </div>
  );
}

export default App;
