import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Components/Layout/footer/footer';
import Header from './Components/Layout/header/header';
import AppRouter from './Router/router';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
