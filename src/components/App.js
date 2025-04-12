import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h1>My Shop</h1>
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <ul className="items">
        <Item name="Apple" category="Fruit" />
        <Item name="Carrot" category="Vegetable" />
      </ul>
    </div>
  );
}

export default App;
