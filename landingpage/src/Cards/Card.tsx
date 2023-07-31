import React, { useEffect, useState } from 'react'
import './Card.css'


interface Props {
    "name": string,
    "url": string,
    "description": string
}

function Card(props: Props) {
  
  function handleClick(): void {
    window.location.replace(props.url)
  }

  return (
    <div className='card'>
      <a className='card-content' href={props.url}>
          <h3>{props.name}</h3>
          <h4 className='hide'>{props.description}</h4>
      </a>
    </div>
  )
}

export default Card
