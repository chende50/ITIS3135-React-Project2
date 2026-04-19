import './index.css';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import AuthProvider from './Components/LoginContext/LoginContext';


function App() {
  return (
    <AuthProvider>
      <Header/>
      <Footer/>
    </AuthProvider>
  )
}
export default App
