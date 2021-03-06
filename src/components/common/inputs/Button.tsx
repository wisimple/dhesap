import React from "react";
import Loop from "@material-ui/icons/Loop";

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
  color?: "primary" | "red" | "green" | "white";
  rounded?: boolean;
  outlined?: boolean;
  size?: "sm" | "md";
  block?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, loading, rounded, size, color = "primary", outlined, block, ...rest } = props;

  const buttonStyle = `${size ? `button--${size}` : ""} ${rounded ? "button--rounded" : ""} button--${color}${
    outlined ? "--outlined" : ""
  } ${block ? "block" : ""}`;
  return (
    <button className={`button ${buttonStyle}`} type="button" {...rest}>
      {children}
      {loading && <Loop className="loader icon icon--right" />}
    </button>
  );
};

export default Button;
