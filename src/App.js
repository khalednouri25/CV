import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Presentation from './components/prsentation/Presentation'
function App() {
  return (
    <div>
      <Header />
      <div className="App">
      <Presentation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
