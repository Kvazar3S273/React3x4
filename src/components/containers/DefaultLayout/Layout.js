import React from "react";
import Header from "../../navbar";

export default (props) => (
  <>
    <Header />
        <div className="container">
            {props.children}
        </div>
  </>
);
