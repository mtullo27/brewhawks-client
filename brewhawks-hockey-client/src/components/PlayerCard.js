import React from "react"
import { Card, CardContent, Typography, Box, Grid, Chip } from "@mui/material"
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
    const renderCaptainBadge = () => {
        if (player.captain) {
            return (
                <Chip
                    label="C"
                    size="small"
                    sx={{
                        borderRadius: "15%",
                        backgroundColor: "#4B72A2",
                        color: "common.white",
                        marginLeft: "14px"
                    }}
                />
            )
        }
        if (player.assistantCaptain) {
            return (
                <Chip
                    label="A"
                    size="small"
                    sx={{
                        borderRadius: "15%",
                        backgroundColor: "#4B72A2",
                        color: "common.white",
                        marginLeft: "14px"
                    }}
                />
            )
        }
        return null
    }

    return (
        <StyledCard>
            <Box flexGrow={1}>
                <CardContent style={{ marginBottom: 0, paddingBottom: "1rem" }}>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{
                            paddingBottom: "1rem",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        #{player.number} {player.name} {renderCaptainBadge()}
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
