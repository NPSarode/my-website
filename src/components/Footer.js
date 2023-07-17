import React from 'react'

export default function Footer(props) {
  return (
    <div className='foot'>
      <h6>Made by <em>{props.title}</em></h6>
    </div>
  )
}
