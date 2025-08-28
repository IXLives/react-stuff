import { useState, useEffect } from "react"

export default function Hangman() {
    const word = "HANGMAN";
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])    

    const maskedWord = word.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");
  return (
    <div>
        <h1>Hangman</h1>
        <h3>{maskedWord}</h3>
        {alphabets.map((letter, index) => <button key={index} onClick={() => {
            if (word.includes(letter)) {
                setCorrectGuesses([...correctGuesses, letter])
            }
        }}>{letter}</button>)}
    </div>
  )
}
