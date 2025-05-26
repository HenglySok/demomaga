import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className='text-2xl bg-amber-300 rounded-2xl'>Test Tailwind</h1>
      <h2 className='text-primary-100'>primary-100</h2>
      <h2 className='text-primary-50'>primary-50</h2>
      <h2 className='text-primary-25'>primary-250</h2>
      <h2 className='text-secondary-100'>Secondary-100</h2>
      <h2 className='text-secondary-50'>Secondary-50</h2>
      <h2 className='text-secondary-25'>Secondary-250</h2>
    </>
  )
}

export default App
