import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {hit, stand} from "../../reducers/actions";
import {loading, players} from "../../reducers/selectors";
import Sidebar from "./Sidebar";

const mapStateToProps = createStructuredSelector({
  loading,
  players
})

const mapDispatchToProps = {
  hit,
  stand
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);