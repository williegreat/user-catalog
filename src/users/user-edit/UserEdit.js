import React, { useState } from "react";
import "./UserEdit.css";

const UserEdit = ({ user, onSave, systemNode }) => {
    const [userValue, setUserValue] = useState(user);

    return (
        <form onSubmit={() => onSave({ ...user, ...userValue })}>
            <div className="user-edit">
                <div className="user-edit-header">New Member</div>
                <div className="user-edit-body">
                    <div className="user-edit-body-row">
                        <label className="form-label">ID:</label>
                        <input
                            required
                            className="form-input"
                            type="number"
                            min="0"
                            max="1000000"
                            value={userValue?.id}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    id: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        ></input>
                    </div>
                    <div className="user-edit-body-row">
                        <label className="form-label">First Name:</label>
                        <input
                            required
                            className="form-input"
                            type="text"
                            maxLength="20"
                            value={userValue?.firstName}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    firstName: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        ></input>
                    </div>
                    <div className="user-edit-body-row">
                        <label className="form-label">Last Name:</label>
                        <input
                            className="form-input"
                            required
                            type="text"
                            maxLength="20"
                            value={userValue?.lastName}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    lastName: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        ></input>
                    </div>
                    <div className="user-edit-body-row">
                        <label className="form-label">Age:</label>
                        <input
                            type="number"
                            className="form-input"
                            min="0"
                            max="120"
                            required
                            value={userValue?.age}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    age: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        ></input>
                    </div>
                    <div className="user-edit-body-row">
                        <label className="form-label">Gender:</label>
                        <select
                            required
                            className="form-input"
                            value={userValue?.gender}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    gender: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        >
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>

                    <div className="user-edit-body-row">
                        <label className="form-label">Marital Status:</label>
                        <select
                            className="form-input"
                            required
                            value={userValue?.maritalStatus}
                            onChange={event => {
                                const newValue = {
                                    ...userValue,
                                    maritalStatus: event.target.value
                                };
                                setUserValue(newValue);
                            }}
                        >
                            <option value="s">Single</option>
                            <option value="m">Married</option>
                            <option value="d">Divorced</option>
                            <option value="w">Widower</option>
                        </select>
                    </div>
                    <hr />
                    <div className="user-edit-body-row-gap">
                        <label className="form-label">Kids:</label>
                        <div className="gap-list">
                            {userValue?.kids?.map &&
                                userValue?.kids?.map((kid, index) => {
                                    return (
                                        <input
                                            className="form-input"
                                            key={index}
                                            type="text"
                                            value={kid.name}
                                            onChange={event => {
                                                if (event.target.value) {
                                                    let newKids = [
                                                        ...userValue.kids
                                                    ];
                                                    newKids[index].name =
                                                        event.target.value;
                                                    if (
                                                        index ===
                                                        userValue?.kids.length -
                                                            1
                                                    ) {
                                                        newKids.push({
                                                            name: ""
                                                        });
                                                    }
                                                    const newValue = {
                                                        ...userValue,
                                                        kids: newKids
                                                    };

                                                    setUserValue(newValue);
                                                }
                                            }}
                                        ></input>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className="user-edit-footer">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
};

export default UserEdit;
