from dataclasses import dataclass


@dataclass
class Word:
    french: str
    pronunciation: str


minimal_pairs = {
    ("e", "ɛ"): [
        (Word("ait", "/ɛ/"), Word("et", "/e/")),
        (Word("allait", "/alɛ/"), Word("aller", "/ale/")),
        (Word("avait", "/avɛ/"), Word("avez", "/ave/")),
        (Word("cachet", "/kaʃɛ/"), Word("cacher", "/kaʃe/")),
        (Word("cotait", "/kɔtɛ/"), Word("coté", "/kɔte/")),
        (Word("jet", "/ʒɛ/"), Word("g", "/ʒe/")),
        (Word("paix", "/pɛ/"), Word("p", "/pe/")),
        (Word("sais", "/sɛ/"), Word("c", "/se/")),
        (Word("volet", "/vɔlɛ/"), Word("voler", "/vɔle/")),
        (Word("était", "/etɛ/"), Word("été", "/ete/")),
    ]
}
