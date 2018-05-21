import '../stylesheets/App.css';
import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header {...this.props}/>
        <MainSection {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }
}

export default App;
