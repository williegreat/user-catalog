import { connect } from "react-redux";
import UserEdit from "./UserEdit";
import { createUser, saveUser, setSystemMode } from "../../store/actions/users";

const mapStateToProps = state => ({
    user: state.users.selectedUser,
    systemNode: state.users.systemNode
});

const mapDispatchToProps = dispatch => ({
    onSave: user => {
        if (user?._id) {
            dispatch(saveUser(user));
            dispatch(setSystemMode("BROWSE"));
        } else {
            dispatch(createUser(user));
            dispatch(setSystemMode("BROWSE"));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
