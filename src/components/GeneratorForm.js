import React from 'react';
import './GeneratorForm.css';
import  TextField from './TextField';
import store from '../store'

export default class GeneratorForm extends React.Component{

componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.form)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

render(){
return (
  <div className="GeneratorForm">
     <TextField
     label="1. What is your name ?"
     onChange={this.handelChange.bind(this, 'name')}
     value={this.state.name}
     />
      <TextField
     label="1. What is your E-mail ?"
     onChange={this.handelChange.bind(this, 'email')}
     value={this.state.email}
     />
  </div>
)
  }

handelChange( input , value){
const form = {...this.state}
form[input] = value;
store.setState( { form : form } )
  }
}