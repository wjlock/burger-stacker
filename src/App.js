import { useState } from "react";

import BurgerPane from "./components/BurgerPane";
import IngredientsPane from "./components/IngredientsPane";

import "./App.css";

function App() {
  const [layers, setLayers] = useState([]);

  const addLayer = (layer) => {
    const newLayers = [...layers, layer];
    setLayers(newLayers);
  };

  const clear = () => {
    setLayers([]);
  };

  return (
    <div className="App">
      <IngredientsPane addLayer={addLayer} />
      <BurgerPane layers={layers} clear={clear} />
    </div>
  );
}

export default App;
