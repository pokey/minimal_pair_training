import re
import sys
from dataclasses import dataclass

import requests

# First command-line parameter is word to search for
word = sys.argv[1]

if not word:
    print("Please provide a word to search for")
    sys.exit(1)

url = "https://commons.wikimedia.org/w/api.php"

# Set up the query parameters, unescaping where necessary
params = {
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


# Make the GET request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Extract and print the titles from the search results
    results = [
        Recording(page["pageid"], page["title"], page["imageinfo"][0]["url"])
        for page in data["query"]["pages"].values()
        if re.match(rf"^File:LL-Q150 \(fra\)-[^-]+-{word}\.wav$", page["title"])
    ]
    print("\n".join([result.title for result in results]))
else:
    print(f"Failed to fetch data: HTTP {response.status_code}")
