import React from "react";
import "./UsersList.css";

const UsersList = ({ users, editUser, setSystemMode }) => {
    return (
        <table className="users-list">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                {users?.map &&
                    users?.map((user, index) => {
                        return (
                            <tr
                                key={index}
                                onDoubleClick={() => {
                                    setSystemMode("EDIT", user);
                                }}
                            >
                                <td>{user?.id}</td>
                                <td>{user?.firstName}</td>
                                <td>{user?.lastName}</td>
                                <td>
                                    {user?.gender === "f"
                                        ? "Female"
                                        : user?.gender === "m"
                                        ? "Male"
                                        : ""}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default UsersList;
