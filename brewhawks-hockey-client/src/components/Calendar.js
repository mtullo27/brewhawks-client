import React, { useState } from "react"
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button
} from "@mui/material"
import { format, parseISO } from "date-fns"

const Calendar = ({ hockeyGames }) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = (offset) => {
        setSelectedDate((prevDate) => {
            const newDate = new Date(prevDate)
            newDate.setDate(prevDate.getDate() + offset)
            return newDate
        })
    }

    const renderGame = (game) => (
        <Card key={game.id} sx={{ mb: 2 }}>
            <CardHeader
                title={`${game.awayTeam} @ ${game.homeTeam}`}
                subheader={game.time}
            />
            <CardActions>
                <Button size="small">More Info</Button>
            </CardActions>
        </Card>
    )

    const renderGames = () => {
        const games = hockeyGames.filter(
            (game) =>
                selectedDate &&
                new Date(game.date).toDateString() ===
                    selectedDate.toDateString()
        )

        return (
            <Box sx={{ mt: 3 }}>
                {games.length ? (
                    games.map(renderGame)
                ) : (
                    <Typography variant="body1">No games scheduled.</Typography>
                )}
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    mb: 2
                }}
            >
                <Button variant="outlined" onClick={() => handleDateChange(-1)}>
                    Previous Day
                </Button>
                <Typography variant="h5">
                    {format(selectedDate, "EEEE, MMMM do, yyyy")}
                </Typography>
                <Button variant="outlined" onClick={() => handleDateChange(1)}>
                    Next Day
                </Button>
            </Box>
            {selectedDate && renderGames()}
        </Box>
    )
}

export default Calendar
