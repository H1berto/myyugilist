'use client';
import React from 'react'
import CardItem, { Card } from '../card'
import Link from 'next/link'

type Props = {
  cards: Card[]
}

function Gallery({ cards }: Props) {
  if(!cards.length)
    return null

  return <ul className='flex-wrap flex gap-5 justify-center mt-10'>
    {cards.map((card, index)=> (
      <Link key={index} href={`/card/${card?.id}`}>
        <li>
          <CardItem card={card}/>
        </li>
      </Link>
    ))}
  </ul>
}

export default Gallery