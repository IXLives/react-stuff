import React from 'react'
type ButtonProps = {
    text: string,
    handleClick: () => void,
    border: string,
    color: string,
}
export default function Button({text, handleClick, border, color}: ButtonProps) {
  return (
    <button onClick={() => handleClick()} className={`${color} ${border} text-white text-lg font-bold rounded-lg px-8 py-3 shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out`}>
        {text}
    </button>
  )
}
