import React, { useState } from "react";
import "./UsersHeader.css";

const UsersHeader = ({
    editNewUser,
    removeAllUsers,
    filterUser,
    systemMode,
    setSystemMode
}) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="user-header">
            <div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={event => {
                        setSearchValue(event.target.value);
                    }}
                ></input>
                <button
                    type="button"
                    onClick={() => {
                        filterUser(searchValue);
                    }}
                >
                    Search
                </button>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        //editNewUser();
                        setSystemMode("CREATE");
                    }}
                >
                    + New Member
                </button>

                <button
                    type="button"
                    onClick={() => {
                        removeAllUsers();
                    }}
                >
                    - Remove All
                </button>
            </div>
        </div>
    );
};

export default UsersHeader;
