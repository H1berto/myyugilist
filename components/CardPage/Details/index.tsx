import { Card } from "@/components/Card"
import Image from "next/image";

type Props = {
  card: Card | null
}

const CardDetails = ({ card }: Props) => {
  if(!card) return null

  return (
    <div className='flex flex-row w-full'>
      <div className='flex w-1/2'>
        <Image
          className='align-middle w-full'
          src={card.card_images[0].image_url}
          alt=""
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className='flex flex-col w-1/2 p-10'>
        <h2 className='text-wrap flex align-middle justify-center w-f text-center text-2xl font-bold'>{card.name}</h2>
        <span>Id: {card.id}</span>
        <span>Tipo do Card: {card.type}</span>
        <span>Tipo de Frame do Card: {card.frameType}</span>
        <span>Raça: {card.race}</span>
        <span>Atributo:</span>
        <p>Descrição: {card.desc}</p>
      </div>
    </div>
  )
}

export default CardDetails