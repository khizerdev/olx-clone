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

function App() {

  const[page,setPage] = useState("Home")

  const changePage = (page) => {
 
    setPage(page)
  }

  return (
    <div className="App">
      <Header onClick={changePage} />
      {page === "Home" && <Home onClick={changePage}  />}
      {page === "Login" && <Login onClick={changePage}  />}
      {page === "Signup" && <Signup onClick={changePage} />}
      {page === "Dashboard" && <Dashboard onClick={changePage} />}
      {page === "Sell" && <Sell onClick={changePage} />}
      {page === "Detail" && <Detail  />}
      <Footer/>
    </div>
  );
}

export default App;
