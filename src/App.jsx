import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dice from './Components/dice'


function App() {

  const allNewDice=()=>{
     const numArray=[];

        for(let i=0;i<10;i++){
        let random= Math.floor(Math.random()*(7-1)+1)
        numArray.push(random);
        }

      return numArray;
  }

console.log(allNewDice(1,6))

  const [value, setValue] = useState(1);
  const [dice,setDice]=useState(allNewDice());

  const diceElements=dice.map((dice)=><Dice value={dice}/>)

  const handleRoll=()=>{
    setDice(prevState=>allNewDice());
  }

  return (

    <div className="App">
      <div className='main-container'>
        <div className='dice-container'>
        {diceElements}
        </div>
      <button className='roll-button' onClick={handleRoll}>Roll</button>   
      </div>
    </div>
    
  )
}

export default App
