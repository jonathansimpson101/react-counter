import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App.js';


class App extends React.Component {

  render() {
    return (
      <div>
        <TheButton />
      </div>
    );
  }
}

class TheButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  increaseCounter(){
    this.setState((state) => {
      return {counter: state.counter + 1};
    });
  }

  decreaseCounter(){
    this.setState((state) => {
      return {counter: state.counter - 1};
    });
  }

  resetCounter(){
    this.setState((state) => {
      return {counter: state.counter = 0};
    });
  }

  render(){
    return (
      <div>
        <div className='container'>
        <h1>{this.state.counter}</h1>
        <div id='buttons'>
          <button onClick={this.increaseCounter.bind(this)}>+1</button>
          <button onClick={this.decreaseCounter.bind(this)}>-1</button>
          <button onClick={this.resetCounter.bind(this)}>Reset</button>
        </div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

