import React form 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component{
    
    static PropTypes = {
        label : PropTypes.string.isRequired,
        onClick : PropTypes.func.isRequired
    }
    
    static defaultProps = {
        onClick : () => undefined
    }

    render(){
        const {label , onClick} = this.props;
        return (
            <button onClick={onClick} className="Button">
                {label}
            </button>
        )
    }
}