import React from 'react';

import './radio-button.css';

interface PropsSide {
  htmlFor: string;
  filter: string;
  radioButtonHandler: any;
  name: string;
  id: string;
  value: string;
  checked: any;
}

const RadioButton: React.FC<PropsSide> = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="container_sort">
      {props.filter}
      <input
        onChange={props.radioButtonHandler}
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.checked}
      />
      <span className="checkmark" />
    </label>
  );
};

export default RadioButton;
