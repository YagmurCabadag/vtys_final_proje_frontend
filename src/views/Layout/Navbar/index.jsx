import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { userRoutes } from "@/routes/routes";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import AccountMenu from "./components/AccountMenu";
import Footer from "../Footer";
import { DynamicBreadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbs } from "@/routes/breadcrumbs";
import AppConfig from "@/config/AppConfig";
import PageTitle from "@/components/Title";
import CardComponent from "@/components/Card";

const drawerWidth = 300;

function AppNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderRoutes = (routes) => {
    return (
      <List>
        {routes.map((route, index) => (
          <div
            key={index}
            className={
              router.pathname === route.path
                ? "bg-white text-black transition duration-500 ease-in-out"
                : "text-white"
            }
          >
            {route.children && route?.children.length > 0 ? (
              <>
                <Typography className="px-4 pt-6 pb-1">
                  {route.title}
                </Typography>
                <Divider className="bg-gray-200" />
                {renderRoutes(route.children)}
              </>
            ) : (
              <Link href={route.path}>
                <ListItem disablePadding secondaryAction>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon
                        icon={route.icon}
                        fontSize={"1.25rem"}
                        color={
                          router.pathname === route.path ? "black" : "white"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}
          </div>
        ))}
      </List>
    );
  };

  const drawer = (
    <div className="bg-[#5D3587] h-screen ">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          color={"white"}
          className="flex items-center justify-center w-full"
        >
          {/* <Image
            src={`/assets/images.png`}
            alt="logo"
            width={1000}
            height={1000}
            className="object-contain w-3/4 h-3/4 mx-auto my-auto"
          /> */}
          {AppConfig.appName}
        </Typography>
      </Toolbar>
      <Divider />
      {<List>{renderRoutes(userRoutes)}</List>}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-[#5D3587]">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="
          flex items-center justify-start w-full
          "
          >
            {AppConfig.appName}
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { lg: drawerWidth },
          flexShrink: { lg: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "0px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { xs: `calc(100% - ${drawerWidth}px)` },
          position: "relative",
        }}
      >
        <Toolbar />

        <Container
          maxWidth="xl"
          style={{
            position: "relative",
            width: "100%",
            marginTop: "1rem",
            flexGrow: 1,
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "calc(81vh)",
          }}
        >
          <Box>
            <DynamicBreadcrumbs breadcrumbs={breadcrumbs} />
          </Box>

          <Box sx={{ flexGrow: 1, py: 2 }}>
            <Divider className="my-4" />
          </Box>

          <Box sx={{ flexGrow: 1, py: 2 }}>
            <PageTitle breadcrumbs={breadcrumbs} />
          </Box>

          <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}

AppNavbar.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default AppNavbar;
