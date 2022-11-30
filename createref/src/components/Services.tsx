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
        position: "absolute",
        right: 0,
        alignItems: "center",
        alignContent: "stretch",
        backgroundColor: "#1D7874",
        marginLeft: "5%",
        width: "30%",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {images.map((img, i) => {
        return (
          <img style={{ maxWidth: "50%", minWidth: "220px" }} src={img} alt={`Image number ${i}`} />
        );
      })}
    </div>
  );
}
