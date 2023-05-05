import React from "react"
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box
} from "@mui/material"
import { styled } from "@mui/system"

const StyledCard = styled(Card)({
    margin: "10px",
    minWidth: "300px",
    paddingLeft: "16px",
    paddingRight: "16px",
    height: "100%",
    display: "flex",
    flexDirection: "column"
})

const StyledCardActions = styled(CardActions)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "0 16px 16px"
})

const PlayerCard = ({ player }) => {
    return (
        <StyledCard>
            <Box flexGrow={1}>
                <CardContent style={{ marginBottom: 0, paddingBottom: 0 }}>
                    <Typography variant="h5">{player.name}</Typography>
                    <Typography variant="body1">
                        {player.description}
                    </Typography>
                    <Typography variant="subtitle1">
                        Submitted by: {player.submitter}
                    </Typography>
                </CardContent>
            </Box>
            <StyledCardActions>
                <Typography variant="subtitle1">
                    Votes: {player.votes}
                </Typography>
            </StyledCardActions>
        </StyledCard>
    )
}

export default PlayerCard
