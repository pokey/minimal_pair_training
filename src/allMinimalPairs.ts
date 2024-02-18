interface Word {
  french: string;
  pronunciation: string;
}

type MinimalPair = [Word, Word];

export const minimalPairs: Record<string, MinimalPair[]> = {
  "e-ɛ": [
    [
      { french: "ait", pronunciation: "/ɛ/" },
      { french: "et", pronunciation: "/e/" },
    ],
    [
      { french: "allait", pronunciation: "/alɛ/" },
      { french: "aller", pronunciation: "/ale/" },
    ],
    [
      { french: "avait", pronunciation: "/avɛ/" },
      { french: "avez", pronunciation: "/ave/" },
    ],
    [
      { french: "cachet", pronunciation: "/kaʃɛ/" },
      { french: "cacher", pronunciation: "/kaʃe/" },
    ],
    [
      { french: "cotait", pronunciation: "/kɔtɛ/" },
      { french: "coté", pronunciation: "/kɔte/" },
    ],
    // [
    //   { french: "jet", pronunciation: "/ʒɛ/" },
    //   { french: "g", pronunciation: "/ʒe/" },
    // ],
    // [
    //   { french: "paix", pronunciation: "/pɛ/" },
    //   { french: "p", pronunciation: "/pe/" },
    // ],
    // [
    //   { french: "sais", pronunciation: "/sɛ/" },
    //   { french: "c", pronunciation: "/se/" },
    // ],
    [
      { french: "volet", pronunciation: "/vɔlɛ/" },
      { french: "voler", pronunciation: "/vɔle/" },
    ],
    [
      { french: "était", pronunciation: "/etɛ/" },
      { french: "été", pronunciation: "/ete/" },
    ],
  ],
};
