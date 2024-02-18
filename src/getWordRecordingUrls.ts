interface Recording {
  pageId: number;
  title: string;
  url: string;
}

function getParams(word: string): Record<string, string | number> {
  return {
    action: "query",
    format: "json",
    prop: "imageinfo|pageprops",
    generator: "search",
    iiprop: "url|extmetadata",
    iimetadataversion: "1",
    iiextmetadatafilter: "Categories",
    gsrsearch: `intitle:/LL-Q150.*-${word}\\.wav/`,
    gsrnamespace: "6",
    gsrlimit: "50",
    gsrwhat: "text",
  };
}

export async function getWordRecordingUrls(word: string): Promise<Recording[]> {
  const params = getParams(word);
  const query = new URLSearchParams(params as any).toString();
  const response = await fetch(`${url}?${query}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  // Assuming data.query.pages could be undefined if no results are found
  if (!data.query || !data.query.pages) {
    return [];
  }

  const recordings: Recording[] = Object.values(data.query.pages)
    .map((page: any) => ({
      pageId: page.pageid,
      title: page.title,
      url: page.imageinfo[0].url,
    }))
    .filter((recording: Recording) =>
      new RegExp(`^File:LL-Q150 \\(fra\\)-[^-]+-${word}\\.wav$`).test(
        recording.title
      )
    );

  return recordings;
}

const url: string = "https://commons.wikimedia.org/w/api.php";
