import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useIsMobile } from "../../utils/screenWidth";
import KonaCareLogo from "../../assets/konacarelogo.svg";

const Header = ({
  backgroundColor = "transparent",
  fontColor = "white",
  menuItems = [],
}: {
  backgroundColor?: string;
  fontColor?: string;
  menuItems?: { title: string; route: string; backgroundColor: string }[];
}) => {
  const isMobileDevice = useIsMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor,
        color: fontColor,
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        px: 4,
        width: "100%",
        position: "fixed",
        py: isMobileDevice ? 4 : 0,
        zIndex: 100,
        fontFamily: "Futura",
      }}
    >
      {/* Logo */}
      <Grid item sx={{ width: "100px" }}>
        <Link to="/">
          <img src={KonaCareLogo} style={{ marginTop: 10 }} alt="Kona Care" />
        </Link>
      </Grid>

      {/* Menu Items or Hamburger Menu */}
      <Grid
        item
        sx={{
          width: isMobileDevice ? "50px" : "50%",
          height: "50px",
          alignSelf: "center",
        }}
      >
        {isMobileDevice ? (
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
                <MenuIcon sx={{ width: "40px", height: "40px" }} />
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
              >
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    height: "100vh",
                  }}
                >
                  {menuItems.map((menuItem, index) => (
                    <Grid
                      item
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
                          color: "white",
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
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              mt: 2,
            }}
          >
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.title}
                to={{ pathname: menuItem.route }}
                style={{
                  textDecoration: "none",
                  color: "#fe914c",
                  textTransform: "uppercase",
                }}
              >
                <Typography variant="h4">{menuItem.title}</Typography>
              </Link>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
