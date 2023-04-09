// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Facts from './components/Facts'

const WEBSITE_NAME = 'Eccowas College'

const imgUrl = `./assets/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg`
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-page">
        <Header title={WEBSITE_NAME}/>
        <Main />
        <Facts url={imgUrl} />
      </div>
    </>
  )
}

export default App
