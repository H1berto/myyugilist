'use client';
import React from 'react'
import CardItem from '../card'

export type Card = {
  archetype: string
  atk: number
  attribute: string
  card_images: CardImage[]
  card_prices: CardPrice[]
  card_sets: CardSet[]
  def: number
  desc: string
  frameType: string
  id: number
  level: number
  name: string
  name_en: string
  race: string
  type: string
  ygoprodeck_url: string
}

type CardImage = {
  id: number
  image_url: string
  image_url_cropped: string
  image_url_small: string
}

type CardPrice = {
  amazon_price: string
  cardmarket_price: string
  coolstuffinc_price: string
  ebay_price: string
  tcgplayer_price: string
}

type CardSet = {
  set_code: string
  set_name: string
  set_price: string
  set_rarity: string
  set_rarity_code: string
}

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