import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import useStyles from "./styles/CardCarouselStyles"
import "./styles/CardCarouselStyles.css"
import { Card, CardContent, Typography } from "@mui/material"
import { format } from "date-fns"

const CardCarousel = ({ cards = [] }) => {
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
                perPage: 1,
                perMove: 1,
                gap: "1rem",
                focus: "center",
                drag: "free",
                autoWidth: true,
                rewind: true,
                rewindSpeed: 1000,
                padding: {
                    left: "calc(50% - 50px)",
                    right: "calc(50% - 50px)",
                    top: "1rem",
                    bottom: "1rem"
                }
            }}
            onActive={(e) => onActiveSlide(e)}
            className={classes.splidePagination}
        >
            {cards.map((game, index) => (
                <SplideSlide key={index}>
                    <Card
                        className={`${classes.EnhancementCard} slide-${index}`}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="div"
                                align="left"
                            >
                                {game.date &&
                                    format(new Date(game.date), "PPP")}
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                align="left"
                            >
                                {game.homeTeam} vs {game.awayTeam}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                align="left"
                            >
                                {game.location} @ {game.time}
                            </Typography>
                        </CardContent>
                    </Card>
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default CardCarousel
