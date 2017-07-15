import React, { Component } from 'react';
import store from '../store';
import Header from './Header';
import GeneratorForm from './GeneratorForm';
import Button from './Button';
import './App.css';

class App extends Component {
componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
  render() {
    return (
      <div className="App">
       <Header/>
      <div className="App-generatorForm">
        <GeneratorForm/>
      </div>
       <div className="App-generatButton">
        <Button label="GENERAT" onClick={this.onGenerateClick.bind(this)}/>
      </div>     
      </div>
    );
  }
onGenerateClick(){
 alert('Hello');
  }


}

export default App;