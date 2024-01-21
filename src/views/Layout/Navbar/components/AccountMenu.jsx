import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import Link from "next/link";
import { footerRoutes } from "@/routes/routes";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { logoutAction } from "@/libs/redux/features/Auth/asyncActions";
import AvatarComponent from "@/components/Avatar";

export default function AccountMenu() {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    dispatch(logoutAction()).then((res) => {
      if (res?.payload?.success) {
        router.push("/account/login");
      }
    });
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Hesap Ayarları">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AvatarComponent
              sx={{
                background: "#A367B1",
                color: "#fff",
              }}
            >
              {user?.username?.charAt(0).toUpperCase()}
            </AvatarComponent>
          </IconButton>
        </Tooltip>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              ml: 1,
              mr: 1,
              fontSize: "0.8rem",
              textTransform: "lowercase",
            }}
          >
            {user?.email}
          </Typography>
          <Typography
            sx={{ ml: 1, mr: 1, fontSize: "0.8rem", textTransform: "none" }}
          >
            {user?.username}
          </Typography>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <List>
            {footerRoutes.map((route, index) => (
              <ListItem key={route.path} disablePadding>
                {route.path === "/logout" ? (
                  <div onClick={() => handleLogout()}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon icon={route.icon} fontSize={"1.25rem"} />
                      </ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItemButton>
                  </div>
                ) : (
                  <Link href={route.path} key={index}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon icon={route.icon} fontSize={"1.25rem"} />
                      </ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItemButton>
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
