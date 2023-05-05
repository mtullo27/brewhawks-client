import "./App.css"
import { Grid } from "@mui/material"
import PlayerList from "./components/PlayerList"
import Calendar from "./components/Calendar"
import CardCarousel from "./components/CardCarousel"

const hockeyGames = [
    {
        id: 1,
        date: "2023-05-05T00:00:00.000Z",
        homeTeam: "Team A",
        awayTeam: "Team B",
        time: "7:00 PM",
        location: "Location A"
    },
    {
        id: 2,
        date: "2023-05-06T00:00:00.000Z",
        homeTeam: "Team C",
        awayTeam: "Team D",
        time: "6:00 PM",
        location: "Location B"
    },
    {
        id: 3,
        date: "2023-05-07T00:00:00.000Z",
        homeTeam: "Team E",
        awayTeam: "Team F",
        time: "8:00 PM",
        location: "Location C"
    },
    {
        id: 4,
        date: "2023-05-09T00:00:00.000Z",
        homeTeam: "Team G",
        awayTeam: "Team H",
        time: "7:30 PM",
        location: "Location D"
    },
    {
        id: 5,
        date: "2023-05-11T00:00:00.000Z",
        homeTeam: "Team I",
        awayTeam: "Team J",
        time: "9:00 PM",
        location: "Location E"
    },
    {
        id: 6,
        date: "2023-05-12T00:00:00.000Z",
        homeTeam: "Team K",
        awayTeam: "Team L",
        time: "5:00 PM",
        location: "Location F"
    },
    {
        id: 7,
        date: "2023-05-13T00:00:00.000Z",
        homeTeam: "Team M",
        awayTeam: "Team N",
        time: "3:00 PM",
        location: "Location G"
    }
]

function App() {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "95vw", padding: "3rem" }}
            >
                <Grid item xs={12} align="left">
                    <CardCarousel hockeyGames={hockeyGames} />
                </Grid>
                <PlayerList players={mockPlayer} />
            </Grid>
        </>
    )
}

export default App

const mockPlayer = [
    {
        number: 27,
        name: "Matthew Tullo",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 8,
        name: "John Smith",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 16,
        name: "Jim Johnson",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 33,
        name: "Mike Johnson",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 42,
        name: "Sean Lee",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    }
]
