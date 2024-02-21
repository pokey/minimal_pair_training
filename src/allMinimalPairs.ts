export interface Word {
  french: string;
  pronunciation: string;
}

export type MinimalPair = [Word, Word];

// From http://minimalpairs.net/en/fr
// (via https://web.archive.org/web/20200804073656/minimalpairs.net/en/fr)
export const minimalPairs: Record<string, MinimalPair[]> = {
  "i-e": [
    [
      { french: "avis", pronunciation: "/avi/" },
      { french: "avez", pronunciation: "/ave/" },
    ],
    [
      { french: "cri", pronunciation: "/kʁi/" },
      { french: "crée", pronunciation: "/kʁe/" },
    ],
    [
      { french: "ni", pronunciation: "/ni/" },
      { french: "nez", pronunciation: "/ne/" },
    ],
  ],

  "i-y": [
    [
      { french: "bit", pronunciation: "/bit/" },
      { french: "but", pronunciation: "/byt/" },
    ],
    [
      { french: "cri", pronunciation: "/kʁi/" },
      { french: "cru", pronunciation: "/kʁy/" },
    ],
    [
      { french: "die", pronunciation: "/di/" },
      { french: "du", pronunciation: "/dy/" },
    ],
    [
      { french: "lit", pronunciation: "/li/" },
      { french: "lu", pronunciation: "/ly/" },
    ],
    [
      { french: "ni", pronunciation: "/ni/" },
      { french: "nu", pronunciation: "/ny/" },
    ],
    [
      { french: "pis", pronunciation: "/pi/" },
      { french: "pu", pronunciation: "/py/" },
    ],
    [
      { french: "si", pronunciation: "/si/" },
      { french: "su", pronunciation: "/sy/" },
    ],
  ],

  "e-ɛ": [
    [
      { french: "et", pronunciation: "/e/" },
      { french: "ait", pronunciation: "/ɛ/" },
    ],
    [
      { french: "aller", pronunciation: "/ale/" },
      { french: "allait", pronunciation: "/alɛ/" },
    ],
    [
      { french: "avez", pronunciation: "/ave/" },
      { french: "avait", pronunciation: "/avɛ/" },
    ],
    [
      { french: "cacher", pronunciation: "/kaʃe/" },
      { french: "cachet", pronunciation: "/kaʃɛ/" },
    ],
    [
      { french: "coté", pronunciation: "/kɔte/" },
      { french: "cotait", pronunciation: "/kɔtɛ/" },
    ],
    [
      { french: "voler", pronunciation: "/vɔle/" },
      { french: "volet", pronunciation: "/vɔlɛ/" },
    ],
    [
      { french: "été", pronunciation: "/ete/" },
      { french: "était", pronunciation: "/etɛ/" },
    ],
  ],

  "y-ø": [
    [
      { french: "su", pronunciation: "/sy/" },
      { french: "ceux", pronunciation: "/sø/" },
    ],
    [
      { french: "cru", pronunciation: "/kʁy/" },
      { french: "creux", pronunciation: "/kʁø/" },
    ],
    [
      { french: "du", pronunciation: "/dy/" },
      { french: "deux", pronunciation: "/dø/" },
    ],
    [
      { french: "fut", pronunciation: "/fy/" },
      { french: "feu", pronunciation: "/fø/" },
    ],
    [
      { french: "jus", pronunciation: "/ʒy/" },
      { french: "jeu", pronunciation: "/ʒø/" },
    ],
    [
      { french: "pu", pronunciation: "/py/" },
      { french: "peu", pronunciation: "/pø/" },
    ],
    [
      { french: "vue", pronunciation: "/vy/" },
      { french: "veut", pronunciation: "/vø/" },
    ],
  ],

  "y-u": [
    [
      { french: "du", pronunciation: "/dy/" },
      { french: "doux", pronunciation: "/du/" },
    ],
    [
      { french: "flux", pronunciation: "/fly/" },
      { french: "flou", pronunciation: "/flu/" },
    ],
    [
      { french: "fur", pronunciation: "/fyʁ/" },
      { french: "four", pronunciation: "/fuʁ/" },
    ],
    [
      { french: "fut", pronunciation: "/fy/" },
      { french: "fou", pronunciation: "/fu/" },
    ],
    [
      { french: "jus", pronunciation: "/ʒy/" },
      { french: "joue", pronunciation: "/ʒu/" },
    ],
    [
      { french: "lu", pronunciation: "/ly/" },
      { french: "loup", pronunciation: "/lu/" },
    ],
    [
      { french: "nu", pronunciation: "/ny/" },
      { french: "nous", pronunciation: "/nu/" },
    ],
    [
      { french: "pure", pronunciation: "/pyʁ/" },
      { french: "pour", pronunciation: "/puʁ/" },
    ],
  ],

  "ø-œ": [
    [
      { french: "jeûne", pronunciation: "/ʒøn/" },
      { french: "jeune", pronunciation: "/ʒœn/" },
    ],
    [
      { french: "veule", pronunciation: "/vøl/" },
      { french: "veulent", pronunciation: "/vœl/" },
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
      { french: "leur", pronunciation: "/lœʁ/" },
      { french: "lors", pronunciation: "/lɔʁ/" },
    ],
    [
      { french: "mœurs", pronunciation: "/mœʁ/" },
      { french: "mort", pronunciation: "/mɔʁ/" },
    ],
    [
      { french: "peur", pronunciation: "/pœʁ/" },
      { french: "port", pronunciation: "/pɔʁ/" },
    ],
    [
      { french: "seul", pronunciation: "/sœl/" },
      { french: "sol", pronunciation: "/sɔl/" },
    ],
    [
      { french: "sœur", pronunciation: "/sœʁ/" },
      { french: "sort", pronunciation: "/sɔʁ/" },
    ],
    [
      { french: "veulent", pronunciation: "/vœl/" },
      { french: "vol", pronunciation: "/vɔl/" },
    ],
  ],

  "o-ɔ": [
    [
      { french: "Côme", pronunciation: "/kom/" },
      { french: "comme", pronunciation: "/kɔm/" },
    ],
    [
      { french: "Beauce", pronunciation: "/bos/" },
      { french: "bosse", pronunciation: "/bɔs/" },
    ],
  ],

  "ɛ̃-œ̃": [
    [
      { french: "brin", pronunciation: "/bʁɛ̃/" },
      { french: "brun", pronunciation: "/bʁœ̃/" },
    ],
  ],

  "ɛ̃-ɑ̃": [
    [
      { french: "craint", pronunciation: "/kʁɛ̃/" },
      { french: "cran", pronunciation: "/kʁɑ̃/" },
    ],
    [
      { french: "frein", pronunciation: "/fʁɛ̃/" },
      { french: "franc", pronunciation: "/fʁɑ̃/" },
    ],
    [
      { french: "grain", pronunciation: "/ɡʁɛ̃/" },
      { french: "grand", pronunciation: "/ɡʁɑ̃/" },
    ],
    [
      { french: "klein", pronunciation: "/klɛ̃/" },
      { french: "clan", pronunciation: "/klɑ̃/" },
    ],
    [
      { french: "lin", pronunciation: "/lɛ̃/" },
      { french: "lent", pronunciation: "/lɑ̃/" },
    ],
    [
      { french: "plein", pronunciation: "/plɛ̃/" },
      { french: "plan", pronunciation: "/plɑ̃/" },
    ],
    [
      { french: "sein", pronunciation: "/sɛ̃/" },
      { french: "cent", pronunciation: "/sɑ̃/" },
    ],
    [
      { french: "teint", pronunciation: "/tɛ̃/" },
      { french: "temps", pronunciation: "/tɑ̃/" },
    ],
    [
      { french: "vin", pronunciation: "/vɛ̃/" },
      { french: "vent", pronunciation: "/vɑ̃/" },
    ],
    [
      { french: "écrin", pronunciation: "/ekʁɛ̃/" },
      { french: "écran", pronunciation: "/ekʁɑ̃/" },
    ],
  ],

  "œ̃-ɑ̃": [
    [
      { french: "commun", pronunciation: "/kɔmœ̃/" },
      { french: "comment", pronunciation: "/kɔmɑ̃/" },
    ],
    [
      { french: "défunt", pronunciation: "/defœ̃/" },
      { french: "défend", pronunciation: "/defɑ̃/" },
    ],
  ],

  "ɥ-w": [
    [
      { french: "lui", pronunciation: "/lɥi/" },
      { french: "louis", pronunciation: "/lwi/" },
    ],
  ],
};
