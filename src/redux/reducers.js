import { ADD_HISTORY } from "./actions";
import _uniqWith from "lodash.uniqwith";
import _isEqual from "lodash.isequal";

const initialState = {
  visitedPersons: []
};

function nextVisitedPersons(prevState, nextPerson) {
  const personsArray = [...prevState.visitedPersons, { person: nextPerson }];
  return _uniqWith(personsArray, _isEqual);
}

function visitedPersons(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
      return Object.assign({}, state, {
        visitedPersons: nextVisitedPersons(state, action.person)
      });
    default:
      return state;
  }
}

export default visitedPersons;
