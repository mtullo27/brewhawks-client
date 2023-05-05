import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    Logo: {
        maxWidth: "50px",
        marginRight: theme.spacing(2)
    },
    Box: {
        padding: theme.spacing(2),
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    Navigation: {
        display: "flex"
    },
    AppBar: {
        zIndex: "1400"
    },
    AppBarShift: {
        zIndex: "1400"
    },
    ApplicationName: {
        flexGrow: 1
    },
    Hide: {
        display: "none"
    },
    Drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    DrawerPaper: {
        width: drawerWidth
    },
    DrawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "space-between"
    },
    Content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginRight: -drawerWidth
    },
    ContentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: 0
    },
    bottomPush: {
        maxWidth: "190px",
        position: "fixed",
        bottom: 0,
        paddingBottom: 10
    }
}))

export default useStyles
