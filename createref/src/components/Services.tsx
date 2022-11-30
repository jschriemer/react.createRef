import React from "react";
declare var require: any;

function importAll(r) {
  return r.keys().map(r);
}

export default function Services(props: {isMobile: boolean}) {
  const images = importAll(
    require.context("../images/services", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: props.isMobile ? "space-around" : "space-between",
        flexWrap: "wrap",
        position: "absolute",
        right: 0,
        alignItems: "center",
        alignContent: "stretch",
        backgroundColor: "#1D7874",
        marginLeft: "5%",
        width: props.isMobile ? "100%" : "30%",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {images.map((img, i) => {
        return (
          <img style={{ maxWidth: props.isMobile ? "32%" : "50%" }} src={img} alt={`Image number ${i}`} />
        );
      })}
    </div>
  );
}
