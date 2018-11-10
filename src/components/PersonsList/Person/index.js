import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToHistory } from "../../../redux/actions.js";
import Person from "./Person";

function mapStateToProps(state) {
  return {
    visitedPersons: state.visitedPersons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        addToHistory
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
