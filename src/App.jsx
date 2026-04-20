import './index.css';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import AuthProvider from './Components/LoginContext/LoginContext';
import Login from './Components/Login/Login';
import { Routes, Route } from 'react-router';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </AuthProvider>
  )
}
export default App
