import React from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  w,
  className = "",
  handler = () => {},
}) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} ${w} ${className} cursor-pointer rounded-3xl px-4 py-2 transition duration-300 hover:scale-105 relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
