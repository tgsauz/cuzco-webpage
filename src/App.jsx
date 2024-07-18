import './App.css'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <div className='container'>
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
