import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      show: true
    }
  }
  render() { 
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>Hello World! </div>
        <button onClick={this.handleClick}>点一下</button>
        <div></div>
      </Fragment>
    )
  }

  handleClick() {
    this.setState(()=>({
      show: ! this.state.show
    }));
  }
}

export default App;
