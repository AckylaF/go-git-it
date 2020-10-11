import React, { useState } from 'react';
import { useDispatch } from 'react-redux'


export default function Search() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const getValue = (event) => {
    setUsername(event.target.value);
  }
  const searchUser = () => {
    dispatch({ type: 'FIND_USER', value: username })
  }

  return (
    <form onClick={searchUser}>
      <label htmlFor="username"></label>
      <input type="text" id="username" placeholder="Username" onChange={getValue} />
      <button type="button" >Search</button>
    </form>
  )
}