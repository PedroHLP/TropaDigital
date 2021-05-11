import React from 'react';
import '../styles/input.css';

const Input = (props) => {
    const {placeholder, type} = props;
    
    return(
        <input placeholder={placeholder} type={type} id="input">
           
        </input>
    )
}
export default Input;
    
