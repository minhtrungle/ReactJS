/*import React from 'react';

const Input = () => {
    return (
        <div>
            <label>Usename</label> 
            <input placeholder='Your usernamer' />
            <br/>
            <label>Pasword</label> 
            <input placeholder='Your pasword' />

                   
        </div>
    );
};

export default Input;*/

//props
import React from "react";

const Input = (props) => {
     return (
         <div>
            <label>{props.labelText}</label>
            <input
            placeholder={props.placeholderText}
            onChange={props.handleOnChange}
            />
         </div>
  );
};

export default Input;
