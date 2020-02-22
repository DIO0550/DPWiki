import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <p>PMonster!</p>
        <Footer />
      </div>
    )
  }
}
