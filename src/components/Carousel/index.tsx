import { Box, Grid, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useRef } from "react";

export default function Carousel({
  carouselItems,
  renderItem,
  sx = {},
  fadeEdges = true,
  scrollDirection = "horizontal",
}: {
  carouselItems: unknown[];
  renderItem: (
    item: { id: number; src: string },
    idx: number
  ) => React.ReactElement;
  sx?: object;
  fadeEdges?: boolean;
  scrollDirection?: "horizontal" | "vertical";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {

    const handleArrowClick = (direction: number) => {
      if (!ref.current) return;
      const child = ref.current.children[0];
      const childWidth = child ? child.getBoundingClientRect().width : 0;
      if (scrollDirection === "horizontal") {
        ref.current.scrollLeft += direction * childWidth;
      } else {
        ref.current.scrollTop += direction * childWidth;
      }
    };

    if (leftRef.current && rightRef.current) {
      leftRef.current.addEventListener(
        "click",
        () => handleArrowClick(-1) // Adjust the scroll speed as needed
      );
      rightRef.current.addEventListener(
        "click",
        () => handleArrowClick(1) // Adjust the scroll speed as needed
      );
    }

    return () => {
      if (leftRef.current && rightRef.current) {
        leftRef.current.removeEventListener("click", () => handleArrowClick);
        rightRef.current.removeEventListener("click", () => handleArrowClick);
      }
    };
  }, [scrollDirection]);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Grid
        container
        ref={ref}
        sx={{
          flexDirection: scrollDirection === "vertical" ? "column" : "row",
          alignItems: "center",
          flexWrap: "nowrap",
          overflowX: scrollDirection === "vertical" ? "clip" : "auto",
          overflowY: scrollDirection === "vertical" ? "auto" : "hidden",
          scrollbarWidth: "none",
          scrollSnapType:
            scrollDirection === "vertical" ? "y mandatory" : "x mandatory",
          overscrollBehaviorX:
            scrollDirection === "vertical" ? "none" : "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: 1,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          ...sx,
        }}
      >
        {scrollDirection === "horizontal" &&
          carouselItems?.map((item: any, idx: number) => renderItem(item, idx))}
        {fadeEdges && scrollDirection === "vertical" && (
          <>
            {scrollDirection === "vertical" &&
              carouselItems?.map((item: any, idx: number) =>
                renderItem(item, idx)
              )}
          </>
        )}
        {fadeEdges && scrollDirection === "horizontal" && (
          <>
            <Box
              ref={leftRef}
              component={IconButton}
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <ArrowBackIos />
            </Box>
            <Box
              ref={rightRef}
              component={IconButton}
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <ArrowForwardIos />
            </Box>
          </>
        )}
      </Grid>
    </Box>
  );
}
