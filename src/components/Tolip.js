import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}

      {show && (
        <span
          className="tooltiptext"
          style={{
            color:"white",
            fontSize:"50px",
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f84949ff",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
