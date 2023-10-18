import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
