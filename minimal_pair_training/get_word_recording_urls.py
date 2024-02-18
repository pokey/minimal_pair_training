import re
from dataclasses import dataclass

import requests

url = "https://commons.wikimedia.org/w/api.php"


def get_params(word: str):
    return {
        "action": "query",
        "format": "json",
        "prop": "imageinfo|pageprops",
        "generator": "search",
        "iiprop": "url|extmetadata",
        "iimetadataversion": "1",
        "iiextmetadatafilter": "Categories",
        "gsrsearch": f"intitle:/LL-Q150.*-{word}\\.wav/",
        "gsrnamespace": "6",
        "gsrlimit": "50",
        "gsrwhat": "text",
    }


@dataclass
class Recording:
    page_id: int
    title: str
    url: str


def get_word_recording_urls(word: str):
    params = get_params(word)

    # Make the GET request
    response = requests.get(url, params=params)

    response.raise_for_status()

    # Parse the JSON response
    data = response.json()

    # Extract and print the titles from the search results
    return [
        Recording(page["pageid"], page["title"], page["imageinfo"][0]["url"])
        for page in data["query"]["pages"].values()
        if re.match(rf"^File:LL-Q150 \(fra\)-[^-]+-{word}\.wav$", page["title"])
    ]
