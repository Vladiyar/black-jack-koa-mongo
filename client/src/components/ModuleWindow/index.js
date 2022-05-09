import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {restart} from "../../reducers/actions";
import {loading, result} from "../../reducers/selectors";
import ModuleWindow from "./ModuleWindow";

const mapStateToProp = createStructuredSelector({
    loading,
    result
})

const mapDispatchToProps = {
    restart
}

export default connect(mapStateToProp, mapDispatchToProps)(ModuleWindow);