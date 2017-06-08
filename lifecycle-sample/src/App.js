import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    console.log('calling the constructor');
    super(props);
    this.state = {
      count: 0
    };
    this.Add = this.Add.bind(this);
    this.Remove = this.Remove.bind(this);
  }
  componentWillMount() {
    console.log('calling componentWillMount');
  }
  componentDidMount() {
    console.log('calling componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('calling componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('calling shouldComponentUpdate');
    return true
  }
  componentWillUpdate() {
    console.log('calling componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('calling componentDidUpdate');
  }
  Add() {
    this.setState({
      count: this.state.count + 1
    })
  }
  Remove() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    console.log('rendering');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Lifecycle Methods Demo</h2>
        </div>
        <div>
          <div>
            <h1>{this.state.count}</h1>
          </div>
          <button className="button-primary" onClick={this.Add}>
            +(Add)
          </button>
          <button onClick={this.Remove}>
            -(Remove)
          </button>
        </div>
        <div id="unmountable">
          <p>
            I dissappear when you unmount
          </p>
        </div>
      </div>
    );
  }
}

export default App;
