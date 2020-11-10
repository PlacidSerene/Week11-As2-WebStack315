import React from "react";

export default function People(props) {
  const { name, height, mass, hair_color, skin_color } = props;

  return (
    <>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <p>Name:</p>
        <p>Height:</p>
        <p>Mass:</p>
        <p>Hair Color:</p>
        <p>Skin Color:</p>
      </div>
      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        <p>{name}</p>
        <p>{height}</p>
        <p>{mass}</p>
        <p>{hair_color}</p>
        <p>{skin_color}</p>
      </div>
    </>
  );
}
