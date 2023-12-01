import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from  './components/SideBar'
import ContentWrapper from './components/ContentWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id="wrapper">
          <SideBar />
          <ContentWrapper />
      </div>
    </>
  )
}

export default App
