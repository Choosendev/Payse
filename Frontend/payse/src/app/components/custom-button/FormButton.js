import React from "react";
import { NavigateButton } from "./form.button.styles";
import Link from 'next/link';
import { useRouter } from 'next/router';

const FormButton = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
  width,
  disabled = false,
}) => {
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
        type="button"
        width={width}
        disabled={disabled}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default FormButton;