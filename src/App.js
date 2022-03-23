import React, { useState } from 'react';

import './App.css';


const [username, setUserName] = useState([]);

// add User Handler to update state, adding new user object
const addUserHandler = NewUser => {
  setUserName(prev => {
    return [NewUser, ...prev];
  })
};


const App = () => {
  
};

export default App;
