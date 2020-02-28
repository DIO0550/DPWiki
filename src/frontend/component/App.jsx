import React from 'react';
import {BrowserRouter as Router, Link, Route}  from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TopPage from './TopPage.jsx';
import MonsterList from './MonsterList.jsx';
import TabMenu from './TabMenu.jsx';
import styles from '../stylesheet/app.sass';

export default class App extends React.Component {
  render () {
    return (
      <div className={styles['app-container']}>
        <Header />
        <TabMenu />
        <Router>
           <Route path='/' exact component={TopPage}/>
           <Route path='/List' exact component={MonsterList}/>
        </Router>
        <Footer />
      </div>
    )
  }
}
