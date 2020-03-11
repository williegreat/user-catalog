import React from "react";
import UsersList from "./users-list/UsersList";
import UsersHeader from "./users-header/UsersHeader";
import Modal from "../modal/modal";
import UserEditContainer from "./user-edit/UserEditContainer";

const Users = ({
    users,
    systemMode,
    editUser,
    editNewUser,
    removeAllUsers,
    filterUser,
    setSystemMode
}) => {
    const hideModal = () => {
        setSystemMode("BROWSE");
    };
    return (
        <div style={{ width: "1200px" }}>
            <UsersHeader
                editNewUser={() => {
                    editNewUser();
                }}
                systemMode={systemMode}
                setSystemMode={setSystemMode}
                removeAllUsers={() => {
                    removeAllUsers();
                }}
                filterUser={searchValue => {
                    filterUser(searchValue);
                }}
            ></UsersHeader>
            <UsersList
                users={users}
                editUser={user => {
                    editUser(user);
                }}
                systemMode={systemMode}
                setSystemMode={setSystemMode}
            ></UsersList>
            <Modal show={systemMode !== "BROWSE"} handleClose={hideModal}>
                <UserEditContainer />
            </Modal>
        </div>
    );
};

export default Users;
