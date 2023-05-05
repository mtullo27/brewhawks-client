import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import useStyles from "./styles/CardCarouselStyles"
import "./styles/CardCarouselStyles.css"
import { Card, CardHeader, CardContent, Typography } from "@mui/material"
import { format, parseISO } from "date-fns"

const CardCarousel = ({ hockeyGames = [] }) => {
    const classes = useStyles()

    const onActiveSlide = (e) => {
        const activeSlide = document.querySelector(".splide__slide.is-active")
        const slides = document.querySelectorAll(".splide__slide")

        slides.forEach((slide) => {
            slide.style.opacity = 0.5
            slide.style.transform = "scale(0.8)"
            slide.style.transition = "all 0.3s"
        })

        activeSlide.style.opacity = 1
        activeSlide.style.transform = "scale(1)"
        activeSlide.style.transition = "all 0.3s"
    }

    return (
        <Splide
            options={{
                perPage: 5,
                perMove: 1,
                gap: "1rem",
                focus: "center",
                drag: "free",
                autoWidth: true,
                rewind: true,
                rewindSpeed: 1000,
                padding: {
                    left: "2rem",
                    right: "2rem",
                    top: "1rem",
                    bottom: "1rem"
                }
            }}
            onActive={(e) => onActiveSlide(e)}
            className={classes.splidePagination}
        >
            {hockeyGames.map((game, index) => (
                <SplideSlide key={index}>
                    <Card key={game.id} sx={{ mb: 2 }}>
                        <CardHeader
                            title={
                                game.date && format(parseISO(game.date), "PPP")
                            }
                            subheader={game.time}
                        />
                        <CardContent>
                            <Typography variant="h6">
                                {`${game.awayTeam} vs ${game.homeTeam}`}
                            </Typography>
                            <Typography variant="body1">
                                {game.location}
                            </Typography>
                        </CardContent>
                    </Card>
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default CardCarousel
