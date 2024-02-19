export interface Word {
  french: string;
  pronunciation: string;
}

export type MinimalPair = [Word, Word];

// From http://minimalpairs.net/en/fr
// (via https://web.archive.org/web/20200804073656/minimalpairs.net/en/fr)
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

  "ø-œ": [
    [
      { french: "jeûne", pronunciation: "/ʒøn/" },
      { french: "jeune", pronunciation: "/ʒœn/" },
    ],
    [
      { french: "veulent", pronunciation: "/vœl/" },
      { french: "veule", pronunciation: "/vøl/" },
    ],
  ],

  "ø-ɔ": [
    [
      { french: "neutre", pronunciation: "/nøtʁ/" },
      { french: "notre", pronunciation: "/nɔtʁ/" },
    ],
  ],

  "œ-ɔ": [
    [
      { french: "beurre", pronunciation: "/bœʁ/" },
      { french: "bord", pronunciation: "/bɔʁ/" },
    ],
    [
      { french: "heure", pronunciation: "/œʁ/" },
      { french: "or", pronunciation: "/ɔʁ/" },
    ],
    [
      { french: "lors", pronunciation: "/lɔʁ/" },
      { french: "leur", pronunciation: "/lœʁ/" },
    ],
    [
      { french: "mœurs", pronunciation: "/mœʁ/" },
      { french: "mort", pronunciation: "/mɔʁ/" },
    ],
    [
      { french: "port", pronunciation: "/pɔʁ/" },
      { french: "peur", pronunciation: "/pœʁ/" },
    ],
    [
      { french: "seul", pronunciation: "/sœl/" },
      { french: "sol", pronunciation: "/sɔl/" },
    ],
    [
      { french: "sort", pronunciation: "/sɔʁ/" },
      { french: "sœur", pronunciation: "/sœʁ/" },
    ],
    [
      { french: "veulent", pronunciation: "/vœl/" },
      { french: "vol", pronunciation: "/vɔl/" },
    ],
  ],
};
