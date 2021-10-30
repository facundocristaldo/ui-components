import React from "react";
import { FlipSpinner } from "components";

const FlipSpinnerPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1em" }}>
        <FlipSpinner />
        <FlipSpinner />
        <FlipSpinner />
      </div>
    </div>
  );
};

export default FlipSpinnerPage;
