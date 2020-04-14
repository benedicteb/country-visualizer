import React, { FC, ReactNode } from "react";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className={"App"}>{children}</div>
);

export default Layout;
