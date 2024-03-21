import React from "react";

function NoDataFoundPage() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "1rem 0",
        color: "grey",
        background: "lightgrey",
      }}
    >
      <h5 style={{ padding: "1rem" }}>Data not found....</h5>
    </div>
  );
}

export default NoDataFoundPage;
