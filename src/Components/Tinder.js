import React from "react";
import Navbar from "./Navbar";

export default function Tinder() {
  return (
    <>
      <Navbar />
      <div className="tindy">
        <h1>Would You Smoke This?</h1>

        <div className="justinsbeaver">
          <button className="tinderyes">Yes</button>

          <div className="recipebox"></div>

          <button className="tinderNo">No</button>
        </div>
      </div>
    </>
  );
}
