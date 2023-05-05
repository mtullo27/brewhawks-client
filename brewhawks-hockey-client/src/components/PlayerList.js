import React, { useState, useEffect } from "react"
import PlayerCard from "./PlayerCard"
import {
    Grid,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Box
} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"
import { styled } from "@mui/system"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"

const Control = styled(Box)({
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
})

const useStyles = makeStyles({
    list: {
        paddingLeft: "3rem",
        paddingRight: "3rem"
    }
})

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#4B72A2"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#4B72A2"
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: "#3F51B5"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4B72A2"
        }
    }
})

const CssFormControl = styled(FormControl)({
    "& label.Mui-focused": {
        color: "#4B72A2"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#4B72A2"
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: "#3F51B5"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4B72A2"
        }
    }
})

const PlayerList = ({ players }) => {
    const classes = useStyles()
    const [searchTerm, setSearchTerm] = useState("")
    const [sortField, setSortField] = useState("number")

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSortFieldChange = (event) => {
        setSortField(event.target.value)
    }

    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
        if (sortField === "number") {
            return a.number - b.number
        } else if (sortField === "name") {
            return a.name.localeCompare(b.name)
        } else if (sortField === "goals") {
            return a.G.localeCompare(b.G)
        } else if (sortField === "assists") {
            return a.A.localeCompare(b.A)
        } else if (sortField === "points") {
            return a.P.localeCompare(b.P)
        } else if (sortField === "penaltyMinutes") {
            return a.PIM.localeCompare(b.PIM)
        }
        return 0
    })

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item sm={8} xs={12}>
                <Control>
                    <CssTextField
                        label="Search Players"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="search"
                        value={searchTerm}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Control>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Control>
                    <CssFormControl fullWidth margin="normal">
                        <InputLabel id="sort-field-select-label">
                            Sort by
                        </InputLabel>
                        <Select
                            labelId="sort-field-select-label"
                            value={sortField}
                            onChange={handleSortFieldChange}
                            label="Sort by"
                        >
                            <MenuItem value="votes">Number</MenuItem>
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="submitter">Goals</MenuItem>
                            <MenuItem value="submitter">Assists</MenuItem>
                            <MenuItem value="submitter">Points</MenuItem>
                            <MenuItem value="submitter">
                                Penalty Minutes
                            </MenuItem>
                        </Select>
                    </CssFormControl>
                </Control>
            </Grid>
            <Grid item xs={12}>
                {sortedPlayers.map((player) => (
                    <Grid
                        key={player.id}
                        item
                        xs={12}
                        sm={12}
                        sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}
                    >
                        <PlayerCard player={player} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default PlayerList
