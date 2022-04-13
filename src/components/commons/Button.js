/*import React from 'react'; //commons tai su dung nhieu lan

const Button = () => {
    return (
        <div>
            <button onClick={() => alert ("Success")}>Button</button>
        </div>
    );
};

export default Button;*/

//props
import React, { useState } from "react";

const Button = (props) => {
    return (
         <div>
             <button onClick={props.onClickHandle} > {props.btnText}</button>
         </div>
  );

};

export default Button;