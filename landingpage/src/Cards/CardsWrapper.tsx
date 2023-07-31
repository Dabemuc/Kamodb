import React, { useEffect, useState } from 'react'
import './CardsWrapper.css'
import cardData from './cards.json'
import Card from './Card'

function CardsWrapper() {

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const cards: any = document.querySelectorAll('.card')
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        card.style.setProperty('--xPos', `${x}px`)
        card.style.setProperty('--yPos', `${y}px`)
      })
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  },[])

  return (
    <div className='cards'>
    {cardData.cards.map((card: any, index) => {
      return <Card key={index} name={card.name} url={card.url} description={card.description}/>
    })}
    </div>
  )
}

export default CardsWrapper
