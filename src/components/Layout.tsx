import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <>
    <header>
      <nav>
        <Link to={"/"}>Contries</Link>
        <Link to={"/summary"}>Summary</Link>
        <Link to={"/languages"}>Languages</Link>
      </nav>
    </header>
    {children}
  </>
);

export default Layout;
