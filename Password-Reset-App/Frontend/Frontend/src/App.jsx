import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen/ForgetPassword';
import ResetPasswordScreen from './screens/ResetPasswordScreen/ResetPasswordScreen'; // Add this import
import MyScreen from './screens/MyScreen/MyScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/forgetpassword' element={<ForgetPasswordScreen />} />
          <Route path='/reset-password' element={<ResetPasswordScreen />} />
          <Route path='/myscreen' element={<MyScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
