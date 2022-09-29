import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/index';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Error from './Pages/Error'
import Store from './Pages/Store';
import UserProvider from './Store/AppContext';

import './App.css';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store" element={UserProvider.admin === '1' ? <Store /> : <Home /> } />
          <Route path='*' element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

