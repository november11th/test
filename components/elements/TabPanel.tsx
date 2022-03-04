import React from "react";

interface Props {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel = ({ value, index, children }: Props) => {
  const visible = value === index;

  return <div>{visible && children}</div>;
};

export default TabPanel;
