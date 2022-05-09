import {connect} from "react-redux";
import {fetched, result, token} from "../../../reducers/selectors"
import {login, game} from "../../../reducers/actions";
import {createStructuredSelector} from "reselect";
import Game from "./Game";


const mapStateToProp = createStructuredSelector({
    token,
    fetched,
    result
})

const mapDispatchToProps = {
    login,
    game
}

export default connect(mapStateToProp, mapDispatchToProps)(Game);