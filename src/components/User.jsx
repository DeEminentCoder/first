import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {username} = useParams()
  console.log(username);
  return (
    <div>User {username}</div>
  )
}

export default User