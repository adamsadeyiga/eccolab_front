// import "./autoload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from './pages/Login/Login'
import Main from './components/Main'
import Header from './components/Header'
import Facts from './components/Facts'
// import MainApp from "./pages/MainApp/Index";
// import AuthGuard from "./pages/AuthGuard";
// import AuthContext from "./contexts/AuthContext";

const imgUrl = `./assets/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg`
const WEBSITE_NAME = 'Eccowas College'

const App = () => {
  
  return (
  //   <AuthContext.Provider value={{authenticated: true}}>
  //     <section className="App">
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<Login />} />
  //           <Route path="login" element={<Login />} />
  //           <Route path="signup" element={<Signup />} />
  //           <Route path="app" element={<AuthGuard >{<MainApp/>}</AuthGuard>} />
  //         </Routes>
  //       </BrowserRouter>
  //     </section>
  //   </AuthContext.Provider>
  // );
    <Router>
        <Header title={WEBSITE_NAME}/> 
        <Routes>
          <Route path='/' exact Component={() => ( 
            <> 
              <Main />  
              <Facts url={imgUrl} /> 
            </> 
          )} />  
          <Route path='/login' Component={Login} />  
          <Route path="signup" element={<Signup />} />

         </Routes>
    </Router>
  )
}

export default App
