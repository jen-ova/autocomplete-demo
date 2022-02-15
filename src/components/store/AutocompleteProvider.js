import React, { createContext, useState } from "react";

export const AutocompleteContext = createContext();

const AutocompleteProvider = ({ children }) => {
  const suggestions = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    if (userInput.length >= 3) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e) => {
    const enter = 13;
    const up = 38;
    const down = 40;
    if (e.keyCode === enter) {
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } else if (e.keyCode === up) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === down) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const autocomplete = {
    suggestions,
    filteredSuggestions,
    setFilteredSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
    showSuggestions,
    setShowSuggestions,
    input,
    setInput,
    onChange,
    onClick,
    onKeyDown,
  };

  return (
    <AutocompleteContext.Provider value={autocomplete}>
      {children}
    </AutocompleteContext.Provider>
  );
};

export default AutocompleteProvider;
