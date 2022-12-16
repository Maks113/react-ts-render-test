import { useState } from 'react';
import * as React from 'react';


const Presenter: React.FC<any> = (props) => {
  return (
	    <div>
        {props.value}
      </div>
    );
};

export default Presenter;
