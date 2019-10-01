import React, { Component } from 'react'
import Routers from './component/router'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <div>
          <Routers/>

      </div>
    )
  }
}

export default App;

