import './scss/App.scss'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './cpmponents/NavBar'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './cpmponents/Provider/MovieProvider'

function App() {

  return (
    <MovieProvider>
      <NavBar></NavBar>

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
