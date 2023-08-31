import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flashcard from './components/Flashcard'
import ColorMode from './components/ColorMode'


function App() {
  

  return (
 <>

 
 <Flashcard results={[]} id={0} category={''} correct_answer={''} difficulty={''} incorrect_answers={[]} question={''} response_code={[]} name={''} selectedCategory={''} onCategoryChange={function (category: string): void {
        throw new Error('Function not implemented.')
      } }/>
   
 </>
  )
}

export default App
