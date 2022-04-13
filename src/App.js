import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    function allNewDice() {
        const newDice = []
        for (let i=0; i < 10; i++){
            const randomNumber = Math.ceil(Math.random() * 6)
            newDice.push({
                value: randomNumber,
                isHeld: false,
                id: nanoid()
            }) 
        }
        return newDice
    }

   const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld}/>)
   function rollDice() {
       setDice(allNewDice())
   }

    return (
        <main className="main">
            <div className="game">
                <div className="dice-container">
                    {diceElements}
                </div>
                <button onClick={rollDice} className="roll-btn">Roll</button>
            </div>
        </main>
    )
}