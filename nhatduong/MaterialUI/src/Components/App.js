import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Content from './Content/Content';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Content/>
        <Footer/>

      </Fragment>
    );
  }
}

export default App;
