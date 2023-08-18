import requests
from bs4 import BeautifulSoup
import re


def fetch_data(URL):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(URL, headers=headers)

    if response.status_code == 200:
        return BeautifulSoup(response.content, 'html.parser')
    else:
        print(
            f"Failed to retrieve the page. HTTP status code: {response.status_code}")
        return None


def extract_schedule(soup):
    print("\n== Team Schedule ==")
    print("Time | Home Team | Home Score | Away Team | Away Score | Location | RS")

    rows = soup.find_all('tr')
    for row in rows:
        columns = [col.get_text(strip=True).replace(
            "WEEKEND TRUE E", "") for col in row.find_all('td')]

        if "BREWHAWKS" in "|".join(columns):
            # Check for "Final" or time patterns
            if columns[0] == "Final":
                # If it's a played game
                _, home_team, home_score, away_team, away_score, location, *_, rs = columns
                formatted_row = f"{columns[0]} | {home_team} | {home_score} | {away_team} | {away_score} | {location} | {rs}"
                print(formatted_row)

            elif any(char.isdigit() for char in columns[0]):
                # If it's an upcoming game
                time, home_team, _, away_team, location, *_, rs = columns
                formatted_row = f"{time} | {home_team} | 0 | {away_team} | 0 | {location} | {rs}"
                print(formatted_row)


def extract_player_stats(soup):
    print("\n== Player Statistics ==")
    print("Player Name | Jersey # | Position | GP | G | A | PTS | P/G | PPG | PPA | SHG | SHA | GWG | PIM")

    rows = soup.find_all('tr')
    for row in rows:
        columns = row.find_all('td')
        # Safety check for the expected number of columns
        if columns and len(columns) >= 15:
            player_name_element = columns[1].find(
                'a', class_='text-dark', href=re.compile("rosters_profile"), attrs={'data-toggle': False})
            if player_name_element:
                player_name = player_name_element.text.strip()

                # Extracting other stats
                jersey_number = columns[2].get_text(strip=True)
                position = columns[3].get_text(strip=True)
                gp = columns[4].get_text(strip=True)
                g = columns[5].get_text(strip=True)
                a = columns[6].get_text(strip=True)
                pts = columns[7].get_text(strip=True)
                p_per_g = columns[8].get_text(strip=True)
                ppg = columns[9].get_text(strip=True)
                ppa = columns[10].get_text(strip=True)
                shg = columns[11].get_text(strip=True)
                sha = columns[12].get_text(strip=True)
                gwg = columns[13].get_text(strip=True)
                pim = columns[14].get_text(strip=True)

                formatted_row = f"{player_name} | {jersey_number} | {position} | {gp} | {g} | {a} | {pts} | {p_per_g} | {ppg} | {ppa} | {shg} | {sha} | {gwg} | {pim}"
                print(formatted_row)


if __name__ == "__main__":
    TEAM_STATS_URL = "https://www.islandicehockey.com/leagues/stats_1team.cfm?leagueID=6195&teamID=610440&clientID=2495"
    SCHEDULE_URL = "https://www.islandicehockey.com/leagues/schedules.cfm?clientid=2495&leagueID=6195&schedType=main&printPage=0"

    # Extract team stats
    soup = fetch_data(TEAM_STATS_URL)
    if soup:
        extract_player_stats(soup)

    # Extract team schedule
    soup = fetch_data(SCHEDULE_URL)
    if soup:
        extract_schedule(soup)
