import React from "react";

const Spinner = (props) => {
  Spinner.defaultProps = {
    message: "Loading...",
  };
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">Loading</div>
    </div>
  );
};

export default Spinner;
