import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Firstblock from './components/Firstblock';
import Secondblock from './components/Secondblock';
import ThirdBlock from './components/ThirdBlock';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Firstblock/>
        <Secondblock/>
        <ThirdBlock/>
        <Footer/>
      </div>
    );
  }
}


export default App;