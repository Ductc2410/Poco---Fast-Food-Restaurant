import React from "react";

type Props = {
  text: string;
};

const Breakscrumb = ({ text }: Props) => (
  <div className="breadcrumb section">
    <h2 className="breadcrumb_text">{text}</h2>
  </div>
);

export default Breakscrumb;
