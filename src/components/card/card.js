import React from 'react';
import { useSelector } from 'react-redux'


export default function Card() {
  const user = useSelector(state => state.user.profile);
  const error = useSelector(state => state.error.notFound)
  
  return (
    <>
      { error === true ? (<h1>Not Found</h1>) : (
        <div>
          <img src={user.avatar_url} alt={user.name}/>

          <div>
            <p> {user.name} </p>
            <p> {user.login} </p>
            <span>{user.public_repos}</span>
            <p> {user.bio} </p>

            <div>
              <span> {user.followers} Followers</span>
              <span> {user.following} Following</span>
            </div>
          </div>

        </div>
      )}
    </>
  )
}