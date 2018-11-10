const ADD_HISTORY = "ADD_HISTORY";

function addToHistory(person) {
  return {
    type: ADD_HISTORY,
    person
  };
}

export { ADD_HISTORY, addToHistory };
