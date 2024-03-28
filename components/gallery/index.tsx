'use client';
import React from 'react'
import CardItem, { Card } from '../Card'

type Props = {
  cards: Card[]
}

function Gallery({ cards }: Props) {
  if(!cards.length)
    return null

  return <ul className='flex-wrap flex gap-5 justify-center mt-10'>
    {cards.map((card, index)=> (
      <li key={index}>
        <CardItem card={card}/>
      </li>
    ))}
  </ul>
}

export default Gallery