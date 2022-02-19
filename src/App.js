import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { useState } from 'react';
import Header from './components/Header';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import Footer from './components/Footer';
import Sell from './views/Sell';
import Detail from './views/Detail';
import Navigation from './config/router';

function App() {

  const[page,setPage] = useState("Home")

  const changePage = (page) => {
 
    setPage(page)
  }

  return (
    <div className="App">
      <Header onClick={changePage} />
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
