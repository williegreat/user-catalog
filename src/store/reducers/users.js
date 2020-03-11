const initialUserState = {
    id: "",
    firstName: "",
    lastName: "",
    maritalStatus: "s",
    gender: "m",
    age: 0,
    kids: [{ name: "" }]
};

const users = (
    state = { users: [], filter: null, systemMode: "BROWSE" },
    action
) => {
    switch (action.type) {
        case "SET_USERS_FILTER":
            return { ...state, filter: action.payload };
        case "SET_USERS":
            return { ...state, users: action.payload };
        // case "SET_SELECTED_USER":
        //     return {
        //         ...state,
        //         selectedUser: action.payload || initialUserState
        //     };
        case "SET_SYSTEM_MODE":
            return {
                ...state,
                systemMode: action.payload.mode,
                selectedUser: action.payload.user || initialUserState
            };
        default:
            return state;
    }
};

export default users;
