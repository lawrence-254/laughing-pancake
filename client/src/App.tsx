
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Authentication/Login'
import MyAccount from './pages/MyAccount'
import MyPodcasts from './pages/MyPodcasts'
import FavouritePodcasts from './pages/FavouritePodcasts'
import DiscoverPodcasts from './pages/DiscoverPodcasts'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/my-account" element={<MyAccount/>} />
        <Route path="/my-podcasts" element={<MyPodcasts/>} />
        <Route path="/favourite-podcasts" element={<FavouritePodcasts/>} />
        <Route path="/podcasts" element={<DiscoverPodcasts/>} />
      </Routes>
    </Router>
  )
}

export default App
