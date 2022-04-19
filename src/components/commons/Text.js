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

import React, { useEffect, useState } from "react";

const Text = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Text;
