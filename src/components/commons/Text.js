/*import React from 'react';

const Text = () => {
    return (
        <div>
            <h1>Information</h1>
        
        </div>
    );
};

export default Text;*/

// todo: Buổi 10 useEffect, useState

/*import React, { useEffect, useState } from "react";

const Text = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Text;*/

// todo: Buổi 12 add style reactjs 
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Title = styled.h1;
  fontsize: "14px";
  color: {(props) => (props.colorText ? props.colorText : "red")};
  background: {(props) => (props.bg ? props.bg : "black")};
const Text = (props) => {
  return (
    <div>
      <Title colorText={props.colorText} bg={props.bg}>
        {props.text}
      </Title>
    </div>
  );
};

export default Text;