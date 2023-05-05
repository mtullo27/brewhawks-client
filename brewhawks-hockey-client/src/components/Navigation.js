import React, { useEffect } from "react"
import clsx from "clsx"
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    IconButton,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Tooltip,
    Paper
} from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"
import DashboardIcon from "@mui/icons-material/Dashboard"
import HomeIcon from "@mui/icons-material/Home"
import useStyles from "./styles/NavigationStyles"

import BrewHawkLogo from "../resources/BrewHawkLogo.png"

function Navigation() {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const navigationItems = [
        {
            text: "Home",
            path: "/home",
            visible: false,
            icon: <DashboardIcon />
        },
        {
            text: "Dashboard",
            path: "/dashboard",
            visible: true,
            icon: <DashboardIcon />
        }
    ]

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleGoHome = async () => {
        setOpen(false)
    }

    return (
        <div className={classes.Navigation}>
            <AppBar
                position="fixed"
                className={clsx(classes.AppBar, {
                    [classes.AppBarShift]: open
                })}
                PaperProps={{ elevation: 24 }}
            >
                <Toolbar>
                    <img
                        alt="Brewhawk Logo"
                        src={BrewHawkLogo}
                        className={classes.Logo}
                    />
                    <Typography
                        variant="h6"
                        className={classes.ApplicationName}
                        noWrap
                    >
                        Brewhawks Hockey
                    </Typography>
                </Toolbar>
            </AppBar>

            <div
                className={clsx(classes.Content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.DrawerHeader} />
            </div>
            <Drawer
                className={classes.Drawer}
                variant="persistent"
                anchor="right"
                open={open}
                PaperProps={{ elevation: 15 }}
            >
                <div className={classes.DrawerHeader}></div>
                <div className={classes.DrawerHeader}>
                    <Tooltip title="Return Home">
                        <IconButton>
                            <HomeIcon onClick={handleGoHome} />
                        </IconButton>
                    </Tooltip>
                </div>
                <Divider />
                <List>
                    {navigationItems
                        .filter((item) => item.visible)
                        .map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                to={item.path}
                                onClick={handleDrawerClose}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
