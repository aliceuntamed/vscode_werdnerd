import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#333e1d]">
      <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#141414]" />
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
      {children}
    </div>
  );
};

export default Card;
