/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
    </>
  );
}

export default Layout;
