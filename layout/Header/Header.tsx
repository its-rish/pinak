import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/layout/header.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import Image from "next/image";
import assest from "@/json/assest";
import CustomButtonOutline from "@/ui/Buttons/CustomButtonOutline";
import { Button } from "@mui/material";
import BrandIcon from "@/ui/Icons/BrandIcon";
import BrandLogo from "@/ui/Icons/BrandLogo";

const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const HeaderWrap = styled(Box)`
background: var(--white);
box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
.MuiToolbar-root {
  min-height: auto;
}
.hdr_rgt {
  margin-left: 18px;
}

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 250px;
    display: inline-block;
    transition: all 0.4s;
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 30px;
      display: inline-block;
      color: var(--black);
      &:hover {
        color: var(--color0000FF);
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: var(--color0000FF);
      }
    }
  }
`;

export default function Header(props: Props) {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Games",
      route: "/superchargers",
    },
    {
      name: "Hosts",
      route: "/hosts",
    },
   
    {
      name: "About Us",
      route: "/about",
    },
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className='headerContainer'
      >
        <Container fixed className="cus_container">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              
              <BrandLogo/>
              
            </Link>
            {/* {isLoggedIn ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <CustomButton
                  onClick={handleLogout}
                  type="button"
                  variant="text"
                >
                  <span>Logout</span>
                </CustomButton>

                <CustomButton type="button" variant="text">
                  <span>{userData?.email}</span>
                </CustomButton>
              </Box>
            )  */}
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                {navItems.map((item,index) => (
                  <Link
                    href={item?.route}
                    key={index}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {/* <CustomButton type="button" variant="text"> */}
                    {item?.name}
                    {/* </CustomButton> */}
                  </Link>
                ))}
              </Box>
           
            <Box className="hdr_rgt">
    
              <CustomButton type="button">
                <Typography variant="caption">Become A Host</Typography>
              </CustomButton>
            
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
