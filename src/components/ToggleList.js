import React from "react";

const ToggleList = (toggleType) => (
  <div className="section_toggle">
    <div id="buy" onClick={toggleType} className="btn active_type">
      Buy Requests
    </div>
    <div id="sell" onClick={toggleType} className="btn">
      Sell Requests
    </div>
  </div>
);


export default ToggleList