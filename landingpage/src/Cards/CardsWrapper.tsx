import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import './CardsWrapper.css'
import cardData from './cards.json'
import Card from './Card'

function CardsWrapper() {

  const [cards, setCards] = useState<any[]>([])
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    //Futuristic Theme
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

    buildCards(0)
    let retryCount = 0;
    waitForHTML()
    function waitForHTML() {
        if(document.getElementsByClassName('card')[cardData.cards.length-1]) {
            buildCards(0)
        } else if(retryCount<20){
            retryCount++;
            setTimeout(() => waitForHTML(), 50)
        }
    }
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  },[])

  function desertThemeStyleProps(index: number, scroll: number, viewportHalfPoint: any, circleRadius: any): React.CSSProperties {
    const distanceToViewportHalfPoint = Math.abs(viewportHalfPoint - ((index*(circleRadius+20)) - scroll + circleRadius/2));
            let opacity = (distanceToViewportHalfPoint - 0) * (0 - 1) / (viewportHalfPoint - 0) + 1 + 0.2
            if(distanceToViewportHalfPoint<1.5*circleRadius && opacity<0.1) opacity = 0.1;
            const size = circleRadius - (distanceToViewportHalfPoint /(circleRadius/15))
            // const offsetTop = ((distanceToViewportHalfPoint*0.2)^(-1));
            const offsetTop = ((-distanceToViewportHalfPoint)^2)*0.1;

            const style = {
                '--opacity': `${opacity}`,
                '--size': `${size}px`,
                '--marginTop': `${offsetTop}px`
            } as React.CSSProperties

    return style
  }

    function buildCards(scroll: number) {
        const viewportHalfPoint = document.getElementsByClassName('cards')[0]?.clientWidth/2; 
        const circleRadius = document.getElementsByClassName('card')[0]? 
            document.getElementsByClassName('card')[0].clientWidth 
            : 200;
        const array = cardData.cards.map((card: any, index) => {
            //calc desert theme css variables
            const style = desertThemeStyleProps(index, scroll, viewportHalfPoint, circleRadius)
            return <Card key={index} name={card.name} url={card.url} description={card.description} style={style}/>
        })

        setCards(array)
    }

  function handleScroll(scroll: number) {
    buildCards(scroll)
  }

  return (
    <div className='cards' ref={cardsRef} onScroll={(event) => handleScroll(event.currentTarget.scrollLeft)}>
    {cardsRef ? cards : "loading cards"}
    </div>
  )
}

export default CardsWrapper
