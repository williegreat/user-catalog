import { connect } from "react-redux";
import Users from "./Users";
import {
    removeAllUsers,
    setUsersFilter,
    createUser,
    setSelectedUser,
    setSystemMode
} from "../store/actions/users";

const getFilteredUsers = state => {
    const users = state.users?.users;
    const filter = state.users?.filter;

    let ret = users;

    if (filter) {
        ret = users.filter(
            user =>
                user?.firstName?.includes(filter) ||
                user?.lastName?.includes(filter)
        );
    }
    return ret;
};

const mapStateToProps = state => ({
    users: getFilteredUsers(state),
    systemMode: state.users.systemMode
});

const mapDispatchToProps = dispatch => ({
    editUser: user => {
        dispatch(setSelectedUser(user));
    },

    editNewUser: user => {
        dispatch(setSelectedUser(null));
    },

    createUser: () => {
        dispatch(createUser());
    },

    removeAllUsers: () => {
        dispatch(removeAllUsers());
    },

    filterUser: filter => {
        dispatch(setUsersFilter(filter));
    },

    setSystemMode: (mode, user) => {
        mode && dispatch(setSystemMode(mode, user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
