import React from "react";
import Autocomplete from "./components/Autocomplete";
import AutocompleteProvider from "./components/store/AutocompleteProvider";
import "./App.css";

const App = () => {
  return (
    <AutocompleteProvider>
      <div className="wrapper">
        <h1>React Autocomplete Demo</h1>
        <h2>Search US states</h2>
        <Autocomplete />
      </div>
    </AutocompleteProvider>
  );
};

export default App;
