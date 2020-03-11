import usersService from "../../utils/usersService";

export function removeAllUsers() {
    return dispatch => {
        usersService.removeAllUsers({}).then(res => {
            if (res.status === 200) {
                dispatch({ type: "SET_USERS", payload: res.data });
            } else {
                //dispatch(someError);
                console.error("error");
            }
        });
    };
}

export function createUser(user) {
    return dispatch => {
        usersService
            .addUser({
                id: user?.id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                gender: user?.gender,
                maritalStatus: user?.maritalStatus,
                age: user?.age,
                kids: user?.kids || []
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setUsers(res.data));
                    dispatch(setSystemMode("BROWSE"));
                } else {
                    //dispatch(someError);
                    console.error("error");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export function saveUser(user) {
    return dispatch => {
        usersService
            .saveUser({
                _id: user?._id,
                id: user?.id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                gender: user?.gender,
                maritalStatus: user?.maritalStatus,
                age: user?.age,
                kids: user?.kids || []
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setUsers(res.data));
                    dispatch(setSystemMode("BROWSE"));
                } else {
                    //dispatch(someError);
                    console.error("error");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export function getUsers() {
    return dispatch => {
        usersService.getUsers().then(res => {
            if (res.status === 200) {
                dispatch({ type: "SET_USERS", payload: res.data });
            } else {
                //dispatch(someError);
                console.error("error");
            }
        });
    };
}

export const setSelectedUser = user => ({
    type: "SET_SELECTED_USER",
    payload: user
});

export const setUsers = users => ({
    type: "SET_USERS",
    payload: users
});

export const setUsersFilter = filter => ({
    type: "SET_USERS_FILTER",
    payload: filter
});

export const setSystemMode = (mode, user) => ({
    type: "SET_SYSTEM_MODE",
    payload: {
        mode,
        user
    }
});
