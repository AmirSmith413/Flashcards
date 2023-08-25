import { Card, CardBody } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface CardProps{
  id:number
  category:string
  correct_answer:string
  difficulty:string
  incorrect_answers:string[]
  question:string 

}

const Flashcard = () => {
  const [data, setData] = useState([])

  const FetchData = () => {
    axios.get('https://opentdb.com/api.php?amount=10&category=15&type=multiple')
    .then(response => setData(response.data))
  }
  useEffect(() => {
    FetchData()
  },[])
  console.log(data)
  return (
   <div>
    
   </div>
  )
}

export default Flashcard