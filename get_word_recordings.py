import requests

# Set up the API endpoint
url = "https://commons.wikimedia.org/w/api.php"

# Set up the query parameters, unescaping where necessary
params = {
    "action": "query",
    "list": "search",
    "srlimit": 100,
    "srsearch": "intitle:/^LL-Q150 (fra)-[^ ]+-aller\\.wav$",
    "utf8": True,
    "srnamespace": 6,
    "srwhat": "text",
    "srprop": "url",
    "format": "json",
}


# Make the GET request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Extract and print the titles from the search results
    for item in data.get("query", {}).get("search", []):
        title = item.get("title")
        if not title.endswith("-aller.wav"):
            continue
        print(title)
else:
    print(f"Failed to fetch data: HTTP {response.status_code}")
