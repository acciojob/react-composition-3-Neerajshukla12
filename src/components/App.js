import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      {/* Do not remove the main div */}

      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>

     <hr
  style={{
    width: "40%",
    margin: "40px auto",
    border: "none",
    borderTop: "2px dotted #999",
  }}
/>


      <Tooltip text="This is a another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
       <hr style={{ width: "65%", margin: "40px auto" }} />
    </div>
  );
};

export default App;
