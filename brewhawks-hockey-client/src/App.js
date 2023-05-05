import "./App.css"
import { Grid } from "@mui/material"
import PlayerList from "./components/PlayerList"
import Navigation from "./components/Navigation"
import CardCarousel from "./components/CardCarousel"

function App() {
    return (
        <>
            <Navigation />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "95vw",
                    paddingLeft: "3rem",
                    paddingRight: "3rem"
                }}
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
        number: 7,
        name: "Matthew Tullo",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 8,
        name: "Todd Derouen",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 27,
        name: "Jim Tullo",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 33,
        name: "John Cardinale",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 42,
        name: "Chris Giamanco",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0,
        assistantCaptain: true
    },
    {
        number: 0,
        name: "Trystan Heiss",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Tommy Horan",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Jason Karpinski",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Shaun Larkin",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Brian O'Hagan",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Johnny O'Hagan",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Sean O'Hagan",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Stephen O'Hagan",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0,
        captain: true
    },
    {
        number: 0,
        name: "Mick Owen",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Mike Walsh",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    },
    {
        number: 0,
        name: "Mike Xuereb",
        GP: 0,
        G: 0,
        A: 0,
        PTS: 0,
        PIM: 0
    }
]

const hockeyGames = [
    {
        id: 1,
        date: "2023-05-08T00:00:00.000Z",
        homeTeam: "Brewhawks",
        awayTeam: "NY Cubs",
        time: "10:30 PM",
        location: "Dix Hills"
    },
    {
        id: 2,
        date: "2023-05-16T00:00:00.000Z",
        homeTeam: "Brewhawks",
        awayTeam: "SC Firefighters",
        time: "10:15 PM",
        location: "Syosset"
    },
    {
        id: 3,
        date: "2023-05-23T00:00:00.000Z",
        homeTeam: "Brewhawks",
        awayTeam: "LI Boys",
        time: "9:45 PM",
        location: "Dix Hills"
    }
]
