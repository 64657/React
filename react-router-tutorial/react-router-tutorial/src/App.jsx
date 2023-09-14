import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/profile' exact component={Profile} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
