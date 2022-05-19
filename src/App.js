import React, { useState } from 'react';
import UserInput from './components/User/UserInput';
import UserList from './components/UserList/UserList';


function App() {

  const [userList, setUserList] = useState([
    {
      name: 'Jim',
      age: 28
    }
  ]);

  const onAddNewUserHandler = (newUser) => {
    setUserList((prevState) => {
      return (
        [
          ...prevState,
          {
            name: newUser.name,
            age: newUser.age
          }
        ]
      )
    })
  }

  return (
    <div>
      <UserInput addNewUser={onAddNewUserHandler} />
      <UserList items={userList} />
    </div>
  );
}

export default App;
