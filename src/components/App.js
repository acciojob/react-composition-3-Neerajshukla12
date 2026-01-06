
import React from "react";
import './../styles/App.css';
import  Tooltip  from "./Tolip"

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      {/* Do not remove the main div */}

      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>
      <hr style={{ width: "65%", margin: "40px auto" }} />
       <Tooltip text="This is a  another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  )
}

export default App
