import { useContext } from "react";
import SuggestionsList from "./SuggestionsList";
import { AutocompleteContext } from "./store/AutocompleteProvider";

const AutoComplete = () => {
  const { onChange, onKeyDown, input, showSuggestions } =
    useContext(AutocompleteContext);

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsList />}
    </>
  );
};

export default AutoComplete;
