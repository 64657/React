import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage'
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom'
// import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
// import CreateNote from './screens/CreateNote/CreateNote'
// import SingleNote from './screens/SingleNote/SingleNote'
import { useState } from 'react'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import ForgetPasswordScreen from './screens/ForgetPasswordScreen/ForgetPassword'
import MyScreen from './screens/MyScreen/MyScreen'

function App() {
  const [search , setSearch] = useState("")
  // console.log(search);

  return (
    <>
    <Router>
    <Header setSearch={setSearch}/>
    {/* <main style = {{ minHeight: "93vh"}}> */}
    <main>
      <Routes>
      <Route path='/' exact Component={LandingPage}  />
      <Route path='/login' exact Component={LoginScreen}  />
      <Route path='/profile' exact Component={ProfileScreen} />
      <Route path='/register' exact Component={RegisterScreen}  />
      <Route path='/forgetpassword' exact Component={ForgetPasswordScreen}  />
      <Route path='/myscreen' exact Component={MyScreen}  />
      

      {/* <Route path="/createnote" exact Component={CreateNote}/> */}
      {/* <Route path='/note/:id' exact Component={SingleNote} /> */}
      {/* <Route path='/mynotes' exact Component={() => <MyNotes search = {search} />}/> */}
      
      </Routes>
    </main>
    <Footer/>
    </Router>
    </>
  )
}

export default App