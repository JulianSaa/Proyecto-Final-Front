import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/index';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import { useContext } from 'react';
import { Context } from './Store/AppContext';


function App() {

  const{user} = useContext(Context)
  console.log(user)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

{/* <Route path="/" element={user.admin === '1' ? <Home /> : <Login /> } /> */}