import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import {Provider} from 'react-redux'
import dataKita from './store/Index'

// import CommentBox from './components/layout/comment/CommentBox'

class App extends Component {
  render() {
    return (
      <Provider className="App" store={dataKita}>
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
     </BrowserRouter>
     </Provider>
    )  
    }
}



export default App;
