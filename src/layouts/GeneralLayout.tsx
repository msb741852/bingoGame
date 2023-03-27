import React from "react";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <div className="general-layout">
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default GeneralLayout;
