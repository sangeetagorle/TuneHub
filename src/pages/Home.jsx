import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/login">LOGIN</Link>
      <br />
      <Link to="/registration">REGISTER</Link>
    </div>
  )
}
