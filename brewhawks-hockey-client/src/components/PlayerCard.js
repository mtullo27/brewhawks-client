import React from "react"
import { Card, CardContent, Typography, Box, Grid } from "@mui/material"
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

const PlayerCard = ({ player }) => {
    return (
        <StyledCard>
            <Box flexGrow={1}>
                <CardContent style={{ marginBottom: 0, paddingBottom: 0 }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ paddingBottom: "1rem" }}
                    >
                        #{player.number} {player.name}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" align="left">
                                GP
                            </Typography>
                            <Typography variant="body1" align="left">
                                {player.GP}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" align="left">
                                G
                            </Typography>
                            <Typography variant="body1" align="left">
                                {player.G}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" align="left">
                                A
                            </Typography>
                            <Typography variant="body1" align="left">
                                {player.A}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" align="left">
                                PTS
                            </Typography>
                            <Typography variant="body1" align="left">
                                {player.PTS}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" align="left">
                                PIM
                            </Typography>
                            <Typography variant="body1" align="left">
                                {player.PIM}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
        </StyledCard>
    )
}

export default PlayerCard
