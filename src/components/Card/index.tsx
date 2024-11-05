'use client';
import React from 'react'
import Image from "next/image";

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
  card: Card
}

const CardItem = ({ card }: Props) => {
  return (
    <div className='w-44 mt-3'>
      <Image
        className='align-middle w-full'
        src={card.card_images[0].image_url}
        alt=""
        width={200}
        height={200}
        priority
      />
      <h2 className='text-wrap flex align-middle justify-center w-f  text-center'>{card.name}</h2>
    </div>
  )

}

export default CardItem