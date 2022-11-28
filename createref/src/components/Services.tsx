import React from "react";
declare var require: any;

function importAll(r) {
  return r.keys().map(r);
}

export default function Services() {
  const images = importAll(
    require.context("../images/services", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "space-around",
        backgroundColor: "#1D7874",
        marginLeft: "10%",
        width: "80%",
        padding: "20px",
        borderRadius: "5px",
        height: "80%",
        minWidth: "70%",
      }}
    >
      {images.map((img, i) => {
        return (
          <img style={{ width: "30%" }} src={img} alt={`Image number ${i}`} />
        );
      })}
    </div>
  );
}
