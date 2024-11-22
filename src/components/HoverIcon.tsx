import React from "react";

interface HoverIconProps {
  icon: React.ReactNode;
}

export const HoverIcon: React.FC<HoverIconProps> = ({ icon }) => {
  return (
    <div className="p-2 rounded-full transition-colors duration-300 ease-in-out hover:fill-white">
      {icon}
    </div>
  );
};
