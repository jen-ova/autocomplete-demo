import React, { useContext } from "react";
import { AutocompleteContext } from "./store/AutocompleteProvider";

const SuggestionsList = () => {
  const { filteredSuggestions, activeSuggestionIndex, onClick } =
    useContext(AutocompleteContext);

  return (
    <ul className="suggestions">
      {filteredSuggestions?.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }
        return (
          <li className={className} key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  );
};

export default SuggestionsList;
