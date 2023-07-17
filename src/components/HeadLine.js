import React from 'react'
import logo from './Logo.jpg'

export default function HeadLine(props) {
  return (
    <div className="col-md-12">
        <header>
        <img src={logo} alt="logo" />
        <h2>{props.title}</h2>
    </header>
    </div>
  )
}
