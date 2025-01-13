import { useState, useEffect } from "react";
import { Grid, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import KonaCareLogo from "../../assets/konacarelogo.svg";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Header = ({
  fontColor = "#F7F7FF",
  menuItems = [],
  onItemClick,
}: {
  fontColor?: string;
  menuItems?: { title: string; route: string; backgroundColor: string }[];
  onItemClick: (route: string) => void;
}) => {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the scroll event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const headerStyle = {
    color: fontColor,
    justifyContent: "space-between",
    alignItems: "center",
    px: isMobileDevice ? 4 : 4,
    width: "100%",
    position: "fixed" as const,
    zIndex: 10000,
    fontFamily: "Futura",
  };

  return (
    <Grid container sx={headerStyle}>
      {/* Logo */}
      <Grid
        item
        onClick={() => onItemClick("/top")}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onItemClick("/top");
          }
        }}
        sx={{ width: "100px", zIndex: 1000000, cursor: "pointer" }}
      >
        <img src={KonaCareLogo} style={{ marginTop: 10 }} alt="Kona Care" />
      </Grid>

      {/* Menu Items or Hamburger Menu */}
      <Grid
        item
        sx={{
          width: isMobileDevice || isTabletDevice ? "50px" : "50%",
          height: "50px",
          alignSelf: "center",
        }}
      >
        {isMobileDevice || isTabletDevice ? (
          <>
            <IconButton
              onClick={toggleMenu}
              color="inherit"
              sx={{
                position: "absolute",
                zIndex: 100000,
                width: "50px",
                height: "50px",
              }}
            >
              {isMenuOpen ? (
                <CancelPresentationIcon
                  sx={{ width: "40px", height: "40px" }}
                />
              ) : (
                <MenuIcon sx={{ width: "40px", height: "40px" }} />
              )}
            </IconButton>
            <Drawer
              anchor="right"
              open={isMenuOpen}
              onClose={toggleMenu}
              sx={{ minWidth: "100vw !important" }}
            >
              <div
                role="presentation"
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
                style={{ width: "100vw" }}
                tabIndex={0}
              >
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    maxHeight: "100dvh",
                    height: "100dvh",
                  }}
                >
                  {menuItems.map((menuItem, index) => (
                    <Grid
                      item
                      onClick={() => onItemClick(menuItem.route)}
                      key={menuItem.title + index}
                      sx={{
                        flex: 1,
                        position: "relative",
                        backgroundColor: menuItem.backgroundColor,
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          alignSelf: "flex-end",
                          position: "absolute",
                          bottom: 25,
                          left: 25,
                          color: "#F7F7FF",
                        }}
                      >
                        {menuItem.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Drawer>
          </>
        ) : (
          <Grid
            container
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "nowrap",
              mt: 1,
              p: 1,
              px: 2,
              borderRadius: 4,
              //border: "1px solid white",
              backgroundColor: isScrolled
                ? "rgba(255, 255, 255, 0.9)"
                : "transparent",
              backdropFilter: isScrolled ? "blur(10px)" : "none",
              transition: "all 0.3s ease, backdrop-filter 0.3s ease",
              transform: isScrolled ? "translateY(-14px)" : "translateY(0)",
            }}
          >
            {menuItems.slice(1).map((menuItem) => (
              <Grid
                item
                key={menuItem.title}
                onClick={() => onItemClick(menuItem.route)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onItemClick(menuItem.route);
                  }
                }}
                //to={{ pathname: menuItem.route }}
                sx={{
                  textDecoration: "none",
                  color: "#fe914c",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#F15A23",
                  },
                }}
              >
                <Typography variant="h4">{menuItem.title}</Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
