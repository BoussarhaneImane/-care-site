import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="m-16 text-center mb-10 max-w-[600px] mx-auto space-y-2  font-serif text-indigo-950">
      <h1 className="text-3xl lg:text-4xl">{title}</h1>
      <p className="text-xs text-gray-400" >{subtitle}</p>
    </div>
  );
};

export default Heading;
