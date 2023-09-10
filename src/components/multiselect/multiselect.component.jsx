import React from 'react';
import {SelectContainer} from "./multiselect.styles";

function MultiFilter({ options, selectedOptions, onOptionChange, placeholder }) {
  return (
    <SelectContainer
      isMulti
      options={options.map((option) => ({ value: option, label: option }))}
      value={selectedOptions.map((option) => ({ value: option, label: option }))}
      onChange={onOptionChange}
      placeholder={placeholder}
    />
  );
}

export default MultiFilter;