import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {players, currentPlayer} from "../../reducers/selectors"
import GameArea from "./GameArea";

const mapStateToProp = createStructuredSelector({
  currentPlayer,
  players,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProp, mapDispatchToProps)(GameArea);