import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => (
  <>
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "15px",
        paddingRight: "15px"
      }}
    >
      <h1 style={{ padding: 0, margin: 0 }}>
        <Link to={"/"}>country visualizer</Link>
      </h1>

      <nav>
        <Link to={"/"}>Countries</Link>
        <Link to={"/summary"}>Summary</Link>
        <Link to={"/languages"}>Languages</Link>
        <a
          href={"https://github.com/benedicteb/country-visualizer"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          Code
        </a>
      </nav>
    </header>
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      {children}
    </main>
  </>
);

export default Layout;
