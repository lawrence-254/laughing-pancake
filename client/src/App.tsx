
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Layout children={<Home />}/>
    </>
  )
}

export default App
