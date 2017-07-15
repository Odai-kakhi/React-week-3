import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

export default class TextField extends React.Component{
static propTypes = {
    label : PropTypes.string,
    value : PropTypes.string.isRequired,
    onChange : propTypes.func.isRequired 
}
 
static defaultProps = {
    value : ''
}

render() {
const {label, value} = this.props;
return (
    <label className="TextField">
        <div className="TextField-label"> {label} </div>
        <input 
            type="text" 
            value={value} 
            className="Textfield-input" 
            onChange={this.handleChange.bind(this)}
        />
    </label>
)
  }

handleChange(event) {
const value = event.target.value;
this.props.onChange(value);
 }  
}
