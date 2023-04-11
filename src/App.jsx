// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Facts from './components/Facts'
import Login from './components/Login'
// import { BrowserRouter as Router, Route } from 'react-router-dom'


const WEBSITE_NAME = 'Eccowas College'

const imgUrl = `./assets/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg`
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Router>
    <>
    {/* <Login /> */}
         <div className="main-page">
          <Header title={WEBSITE_NAME}/>
          {/* <Route path='/' exact render={(props) => ( */}
             <> 
               <Main />  
              <Facts url={imgUrl} /> 
             </>
           {/* )} /> */}
          {/* <Route path='/login' component={Login}> */} 
        </div> 
    </>
    // </Router>
  )
}

export default App
