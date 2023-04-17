import Header from './components/Header'
import Main from './pages/Main'
import Facts from './pages/Facts'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const WEBSITE_NAME = 'Eccowas College'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes> 
        <Route path="/" exact Component={(props) => (
          <>
            <Header title={WEBSITE_NAME}/> 
            <Main />  
            <Facts /> 
          </>
      
        )} />      
        <Route path='/login' Component={Login} />  
      </Routes> 
    </Router>
  )
}

export default App
