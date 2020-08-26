import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/navbar';
import Content from './components/content';
import DashBoard from './components/dashboard/dashboard';
import AddData from './components/data/addData';
import ListData from './components/data/listData';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Content}></Route>
          <Route exact path="/Dashboard" component={DashBoard}></Route>
          <Route exact path="/AddData" component={AddData}></Route>
          <Route exact path="/ListData" component={ListData}></Route>
          
          
        </Switch>
      </div>


    </Router>


  );
}

export default App;
