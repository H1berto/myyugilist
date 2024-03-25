'use client';
import {useState, useEffect} from 'react'
import Gallery from "@/components/gallery";
import axios from "axios"
import SquareLoader from "react-spinners/ClipLoader"

const Search = () => {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(()=>{
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/ygoprodeck`)
      setCards(data)
    }
    getData()
    setLoading(false)
  },[])

  return (
    <div>
      <h1>Lista com cards!</h1>
      {
      loading ? <SquareLoader color="#36d7b7" /> : <Gallery cards={cards}/>
      }
    </div>
  )
}

export default Search