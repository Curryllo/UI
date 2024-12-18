import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className='Contenedor'>
        <div className='Tarjeta'>
          <div className='Izquierda'>
              <h1>
                M A R T I A N
              </h1>
          </div>
          <div className='Derecha'>
            <input
              type='text'
              placeholder='Username'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='InputField'
            />
            <input
              type='text'
              placeholder='Password'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='InputField'
            />
            <div className='Botones'>
              <button className='Boton'>
                Sign In
              </button>
              <button className='Boton'>
                Sign Up
              </button>
            </div>
            <h3>
              Forgot PassWord?
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
