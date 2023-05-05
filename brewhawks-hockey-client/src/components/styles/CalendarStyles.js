import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    EnhancementCard: {
        width: "40vw",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            width: "60vw"
        }
    },
    activeSlide: {
        opacity: 1,
        transform: "scale(1)"
    },
    splidePagination: {
        paddingBottom: "2rem"
    }
}))

export default useStyles
