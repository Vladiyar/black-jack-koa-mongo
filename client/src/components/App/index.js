import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {game, login} from "../../reducers/actions";
import {result, fetched, token} from "../../reducers/selectors"
import App from "./App";

const mapStateToProp = createStructuredSelector({
    fetched,
    result,
    token,
})

const mapDispatchToProps = {
    game,
    login
}

export default connect(mapStateToProp, mapDispatchToProps)(App);