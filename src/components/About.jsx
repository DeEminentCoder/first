
import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const todashboard = () => {
  navigate("/")
}
  return (
    <div>
      About
      {/* Programmatic Redirection */}
      <button onClick={todashboard}>To Dashboard</button>
    </div>
  )
}

export default About