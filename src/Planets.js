import React from "react";

export default function Planets(props) {
  const { name, rotation_period, orbital_period, diameter, climate } = props;
  return (
    <>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <p>Name:</p>
        <p>Rotation Period:</p>
        <p>Orbital Period:</p>
        <p>Diameter:</p>
        <p>Climate:</p>
      </div>
      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        <p>{name}</p>
        <p>{rotation_period}</p>
        <p>{orbital_period}</p>
        <p>{diameter}</p>
        <p>{climate}</p>
      </div>
    </>
  );
}
