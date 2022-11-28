import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Reviews() {
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        width: "80%",
        borderRadius: "5px",
        marginLeft: "10%",
        marginTop: "10%"
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="numStars" style={{ display: "flex" }}>
          <p
            style={{
              marginRight: "10px",
              color: "#1D7874",
              fontWeight: "900",
              fontSize: "3em",
            }}
          >
            4.8
          </p>
          <StarIcon
            style={{ color: "#FFA501", marginTop: "18%", fontSize: "3em" }}
          />
          <StarIcon
            style={{ color: "#FFA501", marginTop: "18%", fontSize: "3em" }}
          />
          <StarIcon
            style={{ color: "#FFA501", marginTop: "18%", fontSize: "3em" }}
          />
          <StarIcon
            style={{ color: "#FFA501", marginTop: "18%", fontSize: "3em" }}
          />
          <StarIcon
            style={{ color: "#FFA501", marginTop: "18%", fontSize: "3em" }}
          />
        </div>
        <p
          style={{
            color: "#1D7874",
            fontSize: "2em",
            fontWeight: "500",
            position: "absolute",
            right: "50",
            paddingRight: "5%",
            marginTop: "5%",
          }}
        >
          Trusted by 100+ clients in Calgary since 2017.
        </p>
      </div>
      <p
        style={{
          color: "#1D7874",
          fontWeight: "100",
          position: "relative",
          top: "-80px",
          paddingLeft: "5%",
        }}
      >
        Based on Google reviews
      </p>
    </div>
  );
}
