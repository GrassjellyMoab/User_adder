import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import styles from './App.module.css';
import Error from './Components/Error/Error';

const App = () => {
  /* 
    eg of object : 
    {
      name: John
      age: 30
      id: 0.124221214
    }
  */
  const [usernames, setUserNames] = useState([]);

  // state to check validity
  const [isValid, setIsValid] = useState(true);

  // set content for Error message 
  const [errorContent, setErrorContent] = useState('');

  // add User Handler to update state, adding new user object
  const addUserHandler = NewUser => {
    // check whether empty and whether age is a number
    if (NewUser.name.trim().length > 0 && NewUser.age.trim().length > 0 && +NewUser.age > 0) {
      setIsValid(true);
    } 
    else {
        setIsValid(false);
        // if empty string
        if (NewUser.name.trim().length === 0|| NewUser.age.trim().length === 0) {
          setErrorContent('Please enter a valid name and age (non-empty values)');
        }
        else {
          setErrorContent('Please enter a valid number(> 0)');
        }
        return;
    }

    setUserNames(prev => {
      return [NewUser, ...prev];
    })
  };

  // function to exit Error window by setting isValid to False
  const exitError = () => {
    setIsValid(true);
  }

  return (
    <div>
      {!isValid && <Error exit={exitError} content={errorContent}></Error>}
      <div className={!isValid && styles['opacitydown']}>
        <AddUser addUser={addUserHandler}></AddUser>
        <UserList items={usernames}></UserList>
      </div>
    </div>
    )
};

export default App;
