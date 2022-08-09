import React from "react";

function SelectNumberValue(props) {
  let range = [];

  for (let i = props.beginn; i <= props.end; i++) {
    range.push(i);
  }

  return (
    <select {...props}>
      {props.emptyvalue && <option value="">Select</option>}
      {range.map((num) => (
        <option value={num} key={num}>
          {num}
        </option>
      ))}
    </select>
  );
}

export default SelectNumberValue;
