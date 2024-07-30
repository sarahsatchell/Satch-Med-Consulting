import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Strategy",
          "Quality Assurance",
          "Medical Devices",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type;
