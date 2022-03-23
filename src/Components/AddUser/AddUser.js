import React, { useState } from "react";
import styles from "./AddUser.module.css";
import AddUserForm from "../AddUserForm/AddUserForm";

const AddUser = props => {

  // saves new UserData with an id
  const saveUserData = (enteredUserdata) => {
    // Add an id to data for key
    const UserData = {
      ...enteredUserdata,
      id: Math.random().toString(),
    };
    // lift the data to App.js using a prop function
    props.addUser(UserData);
  };


  return (
    <div>
        <div className={styles["addUserInterface"]}>
        <   AddUserForm saveData={saveUserData}></AddUserForm>
        </div>
    </div>
  );
};

export default AddUser;
