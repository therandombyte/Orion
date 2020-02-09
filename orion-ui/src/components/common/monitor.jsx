import React from "react";

const Monitor = props => {
  let classes = "fa fa-heart";
  if (!props.monitor) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Monitor;
