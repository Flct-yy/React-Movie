import './scss/App.scss'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './cpmponents/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar></NavBar>

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
