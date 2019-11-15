import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>SCROLLING</h1>
      <span><button><Link to="/">home</Link></button></span>
      <span><button><Link to="/one">one</Link></button></span>
    </div>
  )
}

export default Header
