import React from 'react';
import {BrowserRouter, Router, Link, Route}  from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import TopPage from './TopPage.jsx';
import MonsterList from './MonsterList.jsx';
import CompatibilityTable from './CompatibilityTable.jsx';
import TeamFormation from './TeamFormation.jsx';

import TabMenu from './TabMenu.jsx';

import styles from '../stylesheet/app.sass';
import APP_CONST from '../js/app-const.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div className={styles['app-container']}>
        <Header />
        <BrowserRouter>
           <TabMenu />
           <Route path={APP_CONST.ROUTER_PATH.TOP_PAGE} exact component={TopPage}/>
           <Route path={APP_CONST.ROUTER_PATH.LIST} exact component={MonsterList}/>
           <Route path={APP_CONST.ROUTER_PATH.COMPATIBILITY_TABLE} exact component={CompatibilityTable}/>
           <Route path={APP_CONST.ROUTER_PATH.TEAM_FORMATION} exact component={TeamFormation}/> 
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
