import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector(state=>state.counter.value)
  const count2 = useSelector(state=>state.counter.count2)
  // console.log("Render bên user")
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <b>{count2}</b>
    </div>
  );
};

export default User;