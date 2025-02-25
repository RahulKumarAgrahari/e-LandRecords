import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <form className="mt-6">
            <div>
              <label className="block text-gray-700">Email:&nbsp;</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password:&nbsp;</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>01</div>
              <div>09</div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login

            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App



/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */