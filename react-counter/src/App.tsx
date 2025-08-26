import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const resetCount = () => setCount(0)
  const incrementCount = () => setCount((count) => count + 1)
  const decrementCount = () => setCount((count) => count - 1)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue via-gray-600 to-gray-900 text-white px-4'>
      <h1 className='text-5xl font-extrabold mb-8 text-white drop-shadow-lg uppercase tracking-wide'>React Counter</h1>
      <div className='bg-gray-100 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center space-y-8 border-4 border-gray-3'>
        <h3 className='text-7xl font-black text-gray-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]'>{count}</h3>
        <div className='flex gap-6'>
          <Button text="Increment" handleClick={incrementCount} color='bg-green-600' border='border-green-800 border-4'/>
          <Button text="Decrement" handleClick={decrementCount} color='bg-red-600' border='border-red-800 border-4'/>
          <Button text="Reset" handleClick={resetCount} color='bg-yellow-600' border='border-yellow-800 border-4'/>
        </div>
      </div>
    </div>
  )
}

export default App
