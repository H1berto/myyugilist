'use client';
import React from 'react'
import Image from "next/image";
import { Card } from '../gallery';

type Props = {
  card: Card
}

const Card = ({ card }: Props) => {
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

export default Card