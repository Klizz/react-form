import React from 'react';

const Input = props => {
    return(
        <div className="input-field col s6">
            <label htmlFor={props.name}>
                {props.title}
            </label>
            <input
            className="form"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleChange}
            />
        </div>
    )
}

export default Input;