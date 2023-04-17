import "./autoload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MainApp from "./pages/MainApp/Index";
import AuthGuard from "./pages/AuthGuard";
import AuthContext from "./contexts/AuthContext";

const App = () => {
  
  return (
    <AuthContext.Provider value={{authenticated: true}}>
      <section className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="app" element={<AuthGuard >{<MainApp/>}</AuthGuard>} />
          </Routes>
        </BrowserRouter>
      </section>
    </AuthContext.Provider>
  );
}

export default App
