import {connect} from "react-redux";
import {fetched, token} from "../../../reducers/selectors"
import {login} from "../../../reducers/actions";
import {createStructuredSelector} from "reselect";
import Login from "./Login";


const mapStateToProp = createStructuredSelector({
    token,
    fetched
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProp, mapDispatchToProps)(Login);