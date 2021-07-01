import React from 'react';
import styles from'./App.module.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import CountryInfo from './components/CountryInfo/CountryInfo';


const App = ()  => {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header />
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route path="/maincontainer/:name" children={<CountryInfo />}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
