import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
