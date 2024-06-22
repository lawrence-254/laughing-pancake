
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  )
}

export default App
