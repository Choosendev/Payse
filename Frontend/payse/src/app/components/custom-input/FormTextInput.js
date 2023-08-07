import React from "react";
import { FormControl, FormLabel } from "./text.input.styles";

const FormTextInput = ({
  labelName,
  placeholder,
  width,
  value,
  handleChange,
  name,
  height
}) => {
  return (
    <>
      <FormLabel>{labelName}</FormLabel>
      <FormControl width={width}>
        <input
          type="text"
          className="form-input"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          height={height}
        />
      </FormControl>
    </>
  );
};

export default FormTextInput;