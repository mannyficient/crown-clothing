import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  cartbutton,
  ...otherProps
}) => {
  return (
    <button
      className={`${cartbutton ? "cartbutton" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
