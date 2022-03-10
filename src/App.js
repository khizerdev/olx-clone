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
import {Provider} from 'react-redux'
import {store , persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const[page,setPage] = useState("Home")

  const changePage = (page) => {
 
    setPage(page)
  }

  return (
    <Provider store={store}>
   <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <div className="App">
        
          <Navigation/>
          <Footer/>
        </div>
        </PersistGate>
    </Provider>
  );
}

export default App;
