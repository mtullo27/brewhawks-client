import React from "react"
import PlayerCard from "./PlayerCard"
import { Grid } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    list: {
        paddingLeft: "3rem",
        paddingRight: "3rem"
    }
})

const PlayerList = ({ players }) => {
    const classes = useStyles()

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            className={classes.list}
            spacing={2}
        >
            {players.map((player) => (
                <Grid key={player.id} item xs={12} sm={12}>
                    <PlayerCard player={player} />
                </Grid>
            ))}
        </Grid>
    )
}

export default PlayerList
