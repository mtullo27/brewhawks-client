import logo from "./logo.svg"
import "./App.css"
import PlayerList from "./components/PlayerList"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PlayerList players={mockPlayer} />
            </header>
        </div>
    )
}

export default App

const mockPlayer = [
    {
        id: 1,
        name: "Dark Mode",
        description:
            "Implement a dark mode theme for better user experience during nighttime usage.",
        submitter: "Alice",
        votes: 20
    },
    {
        id: 2,
        name: "Performance Boost",
        description:
            "Optimize the application for faster load times and smoother overall performance.",
        submitter: "Bob",
        votes: 12
    },
    {
        id: 3,
        name: "Accessibility Enhancements",
        description:
            "Improve accessibility features for users with disabilities, including screen reader support and better keyboard navigation.",
        submitter: "Cathy",
        votes: 8
    },
    {
        id: 4,
        name: "Mobile-Friendly Design",
        description:
            "Redesign the user interface to be more responsive and mobile-friendly for users on smartphones and tablets.",
        submitter: "David",
        votes: 25
    },
    {
        id: 5,
        name: "Multilingual Support",
        description:
            "Add support for multiple languages, allowing users to switch between their preferred language within the application.",
        submitter: "Ella",
        votes: 15
    }
]
