const elements = [
    // period 1
    {
        no: 1,
        sym: "H",
        group: 1,
        period: 1,
        name: "Hydrogen",
        cat: "non-metal"
    },
    {
        no: 2,
        sym: "He",
        group: 18,
        period: 1,
        name: "Helium",
        cat: "noble"
    },

    // period 2
    {
        no: 3,
        sym: "Li",
        group: 1,
        period: 2,
        name: "Lithium",
        cat: "alkali",
    },
    {
        no: 4,
        sym: "Be",
        group: 2,
        period: 2,
        name: "Beryllium",
        cat: "alkaline"
    },
    {
        no: 5,
        sym: "B",
        group: 13,
        period: 2,
        name: "Boron",
        cat: "metalloids"
    },
    {
        no: 6,
        sym: "C",
        group: 14,
        period: 2,
        name: "Carbon",
        cat: "non-metal"
    },
    {
        no: 7,
        sym: "N",
        group: 15,
        period: 2,
        name: "Nitrogen",
        cat: "non-metal"
    },
    {
        no: 8,
        sym: "O",
        group: 16,
        period: 2,
        name: "Oxygen",
        cat: "non-metal"
    },
    {
        no: 9,
        sym: "F",
        group: 17,
        period: 2,
        name: "Fluorine",
        cat: "halogen"
    },
    {
        no: 10,
        sym: "Ne",
        group: 18,
        period: 2,
        name: "Neon",
        cat: "noble"
    },

    // period 3
    {
        no: 11,
        sym: "Na",
        group: 1,
        period: 3,
        name: "Sodium",
        cat: "alkali",
    },
    {
        no: 12,
        sym: "Mg",
        group: 2,
        period: 3,
        name: "Magnesium",
        cat: "alkaline"
    },
    {
        no: 13,
        sym: "Al",
        group: 13,
        period: 3,
        name: "Aluminium",
        cat: "post-transition"
    },
    {
        no: 14,
        sym: "Si",
        group: 14,
        period: 3,
        name: "Silicon",
        cat: "metalloids"
    },
    {
        no: 15,
        sym: "P",
        group: 15,
        period: 3,
        name: "Phosphorus",
        cat: "non-metal"
    },
    {
        no: 16,
        sym: "S",
        group: 16,
        period: 3,
        name: "Sulfur",
        cat: "non-metal"
    },
    {
        no: 17,
        sym: "Cl",
        group: 17,
        period: 3,
        name: "Chlorine",
        cat: "halogen"
    },
    {
        no: 18,
        sym: "Ar",
        group: 18,
        period: 3,
        name: "Argon",
        cat: "noble"
    },

    // period 4
    {
        no: 19,
        sym: "K",
        group: 1,
        period: 4,
        name: "Potassium",
        cat: "alkali",
    },
    {
        no: 20,
        sym: "Ca",
        group: 2,
        period: 4,
        name: "Calcium",
        cat: "alkaline"
    },
    {
        no: 21,
        sym: "Sc",
        group: 3,
        period: 4,
        name: "Scandium",
        cat: "transition"
    },
    {
        no: 22,
        sym: "Ti",
        group: 4,
        period: 4,
        name: "Titanium",
        cat: "transition"
    },
    {
        no: 23,
        sym: "V",
        group: 5,
        period: 4,
        name: "Vanadium",
        cat: "transition"
    },
    {
        no: 24,
        sym: "Cr",
        group: 6,
        period: 4,
        name: "Chromium",
        cat: "transition"
    },
    {
        no: 25,
        sym: "Mn",
        group: 7,
        period: 4,
        name: "Manganese",
        cat: "transition"
    },
    {
        no: 26,
        sym: "Fe",
        group: 8,
        period: 4,
        name: "Iron",
        cat: "transition"
    },
    {
        no: 27,
        sym: "Co",
        group: 9,
        period: 4,
        name: "Cobalt",
        cat: "transition"
    },
    {
        no: 28,
        sym: "Ni",
        group: 10,
        period: 4,
        name: "Nickel",
        cat: "transition"
    },
    {
        no: 29,
        sym: "Cu",
        group: 11,
        period: 4,
        name: "Copper",
        cat: "transition"
    },
    {
        no: 30,
        sym: "Zn",
        group: 12,
        period: 4,
        name: "Zinc",
        cat: "transition"
    },
    {
        no: 31,
        sym: "Ga",
        group: 13,
        period: 4,
        name: "Gallium",
        cat: "post-transition"
    },
    {
        no: 32,
        sym: "Ge",
        group: 14,
        period: 4,
        name: "Germanium",
        cat: "metalloids"
    },
    {
        no: 33,
        sym: "As",
        group: 15,
        period: 4,
        name: "Arsenic",
        cat: "metalloids"
    },
    {
        no: 34,
        sym: "Se",
        group: 16,
        period: 4,
        name: "Selenium",
        cat: "non-metal"
    },
    {
        no: 35,
        sym: "Br",
        group: 17,
        period: 4,
        name: "Bromine",
        cat: "halogen"
    },
    {
        no: 36,
        sym: "Kr",
        group: 18,
        period: 4,
        name: "Krypton",
        cat: "noble"
    },

    // period 5
    {
        no: 37,
        sym: "Rb",
        group: 1,
        period: 5,
        name: "Rubidium",
        cat: "alkali",
    },
    {
        no: 38,
        sym: "Sr",
        group: 2,
        period: 5,
        name: "Strontium",
        cat: "alkaline"
    },
    {
        no: 39,
        sym: "Y",
        group: 3,
        period: 5,
        name: "Yttrium",
        cat: "transition"
    },
    {
        no: 40,
        sym: "Zr",
        group: 4,
        period: 5,
        name: "Zirconium",
        cat: "transition"
    },
    {
        no: 41,
        sym: "Nb",
        group: 5,
        period: 5,
        name: "Niobium",
        cat: "transition"
    },
    {
        no: 42,
        sym: "Mo",
        group: 6,
        period: 5,
        name: "Molybdenum",
        cat: "transition"
    },
    {
        no: 43,
        sym: "Tc",
        group: 7,
        period: 5,
        name: "Technetium",
        cat: "transition"
    },
    {
        no: 44,
        sym: "Ru",
        group: 8,
        period: 5,
        name: "Ruthenium",
        cat: "transition"
    },
    {
        no: 45,
        sym: "Rh",
        group: 9,
        period: 5,
        name: "Rhodium",
        cat: "transition"
    },
    {
        no: 46,
        sym: "Pd",
        group: 10,
        period: 5,
        name: "Palladium",
        cat: "transition"
    },
    {
        no: 47,
        sym: "Ag",
        group: 11,
        period: 5,
        name: "Silver",
        cat: "transition"
    },
    {
        no: 48,
        sym: "Cd",
        group: 12,
        period: 5,
        name: "Cadmium",
        cat: "transition"
    },
    {
        no: 49,
        sym: "In",
        group: 13,
        period: 5,
        name: "Indium",
        cat: "post-transition"
    },
    {
        no: 50,
        sym: "Sn",
        group: 14,
        period: 5,
        name: "Tin",
        cat: "post-transition"
    },
    {
        no: 51,
        sym: "Sb",
        group: 15,
        period: 5,
        name: "Antimony",
        cat: "metalloids"
    },
    {
        no: 52,
        sym: "Te",
        group: 16,
        period: 5,
        name: "Tellurium",
        cat: "metalloids"
    },
    {
        no: 53,
        sym: "I",
        group: 17,
        period: 5,
        name: "Iodine",
        cat: "halogen"
    },
    {
        no: 54,
        sym: "Xe",
        group: 18,
        period: 5,
        name: "Xenon",
        cat: "noble"
    },

    // period 6
    {
        no: 55,
        sym: "Cs",
        group: 1,
        period: 6,
        name: "Caesium",
        cat: "alkali",
    },
    {
        no: 56,
        sym: "Ba",
        group: 2,
        period: 6,
        name: "Barium",
        cat: "alkaline"
    },
    {
        // no: 57,
        sym: "La - Lu",
        group: 3,
        period: 6,
        name: "",
        cat: "lanthanides"
    },
    {
        no: 72,
        sym: "Hf",
        group: 4,
        period: 6,
        name: "Hafnium",
        cat: "transition"
    },
    {
        no: 73,
        sym: "Ta",
        group: 5,
        period: 6,
        name: "Tantalum",
        cat: "transition"
    },
    {
        no: 74,
        sym: "W",
        group: 6,
        period: 6,
        name: "Tungsten",
        cat: "transition"
    },
    {
        no: 75,
        sym: "Re",
        group: 7,
        period: 6,
        name: "Rhenium",
        cat: "transition"
    },
    {
        no: 76,
        sym: "Os",
        group: 8,
        period: 6,
        name: "Osmium",
        cat: "transition"
    },
    {
        no: 77,
        sym: "Ir",
        group: 9,
        period: 6,
        name: "Iridium",
        cat: "transition"
    },
    {
        no: 78,
        sym: "Pt",
        group: 10,
        period: 6,
        name: "Platinum",
        cat: "transition"
    },
    {
        no: 79,
        sym: "Au",
        group: 11,
        period: 6,
        name: "Gold",
        cat: "transition"
    },
    {
        no: 80,
        sym: "Hg",
        group: 12,
        period: 6,
        name: "Mercury",
        cat: "transition"
    },
    {
        no: 81,
        sym: "Tl",
        group: 13,
        period: 6,
        name: "Thallium",
        cat: "post-transition"
    },
    {
        no: 82,
        sym: "Pb",
        group: 14,
        period: 6,
        name: "Lead",
        cat: "post-transition"
    },
    {
        no: 83,
        sym: "Bi",
        group: 15,
        period: 6,
        name: "Bismuth",
        cat: "post-transition"
    },
    {
        no: 84,
        sym: "Po",
        group: 16,
        period: 6,
        name: "Polonium",
        cat: "post-transition"
    },
    {
        no: 85,
        sym: "At",
        group: 17,
        period: 6,
        name: "Astatine",
        cat: "halogen"
    },
    {
        no: 86,
        sym: "Rn",
        group: 18,
        period: 6,
        name: "Radon",
        cat: "noble"
    },

    // spl case in period 6
    {
        no: 57,
        sym: "La",
        group: 3,
        period: 9,
        name: "Lanthanum",
        cat: "lanthanides"
    },
    {
        no: 58,
        sym: "Ce",
        group: 4,
        period: 9,
        name: "Cerium",
        cat: "lanthanides"
    },
    {
        no: 59,
        sym: "Pr",
        group: 5,
        period: 9,
        name: "Praseodymium",
        cat: "lanthanides"
    },
    {
        no: 60,
        sym: "Nd",
        group: 6,
        period: 9,
        name: "Neodymium",
        cat: "lanthanides"
    },
    {
        no: 61,
        sym: "Pm",
        group: 7,
        period: 9,
        name: "Promethium",
        cat: "lanthanides"
    },
    {
        no: 62,
        sym: "Sm",
        group: 8,
        period: 9,
        name: "Samarium",
        cat: "lanthanides"
    },
    {
        no: 63,
        sym: "Eu",
        group: 9,
        period: 9,
        name: "Europium",
        cat: "lanthanides"
    },
    {
        no: 64,
        sym: "Gd",
        group: 10,
        period: 9,
        name: "Gadolinium",
        cat: "lanthanides"
    },
    {
        no: 65,
        sym: "Tb",
        group: 11,
        period: 9,
        name: "Terbium",
        cat: "lanthanides"
    },
    {
        no: 66,
        sym: "Dy",
        group: 12,
        period: 9,
        name: "Dysprosium",
        cat: "lanthanides"
    },
    {
        no: 67,
        sym: "Ho",
        group: 13,
        period: 9,
        name: "Holmium",
        cat: "lanthanides"
    },
    {
        no: 68,
        sym: "Er",
        group: 14,
        period: 9,
        name: "Erbium",
        cat: "lanthanides"
    },
    {
        no: 69,
        sym: "Tm",
        group: 15,
        period: 9,
        name: "Thulium",
        cat: "lanthanides"
    },
    {
        no: 70,
        sym: "Yb",
        group: 16,
        period: 9,
        name: "Ytterbium",
        cat: "lanthanides"
    },
    {
        no: 71,
        sym: "Lu",
        group: 17,
        period: 9,
        name: "Lutetium",
        cat: "lanthanides"
    },

    // period 7
    {
        no: 87,
        sym: "Fr",
        group: 1,
        period: 7,
        name: "Francium",
        cat: "alkali",
    },
    {
        no: 88,
        sym: "Ra",
        group: 2,
        period: 7,
        name: "Radium",
        cat: "alkaline"
    }, {

        sym: "Ac - Lr",
        group: 3,
        period: 7,
        name: "",
        cat: "actinides"
    }, {
        no: 104,
        sym: "Rf",
        group: 4,
        period: 7,
        name: "Rutherfordium",
        cat: "transition"
    }, {
        no: 105,
        sym: "Db",
        group: 5,
        period: 7,
        name: "Dubnium",
        cat: "transition"
    }, {
        no: 106,
        sym: "Sg",
        group: 6,
        period: 7,
        name: "Seaborgium",
        cat: "transition"
    }, {
        no: 107,
        sym: "Bh",
        group: 7,
        period: 7,
        name: "Bohrium",
        cat: "transition"
    }, {
        no: 108,
        sym: "Hs",
        group: 8,
        period: 7,
        name: "Hassium",
        cat: "transition"
    }, {
        no: 109,
        sym: "Mt",
        group: 9,
        period: 7,
        name: "Meitnerium",
        cat: "transition"
    }, {
        no: 110,
        sym: "Ds",
        group: 10,
        period: 7,
        name: "Darmstadtium",
        cat: "transition"
    }, {
        no: 111,
        sym: "Rg",
        group: 11,
        period: 7,
        name: "Roentgenium",
        cat: "transition"
    }, {
        no: 112,
        sym: "Cn",
        group: 12,
        period: 7,
        name: "Copernicium",
        cat: "transition"
    }, {
        no: 113,
        sym: "Nh",
        group: 13,
        period: 7,
        name: "Nihonium",
        cat: "post-transition"
    }, {
        no: 114,
        sym: "Fl",
        group: 14,
        period: 7,
        name: "Flerovium",
        cat: "post-transition"
    }, {
        no: 115,
        sym: "Mc",
        group: 15,
        period: 7,
        name: "Moscovium",
        cat: "post-transition"
    }, {
        no: 116,
        sym: "Lv",
        group: 16,
        period: 7,
        name: "Livermorium",
        cat: "post-transition"
    }, {
        no: 117,
        sym: "Ts",
        group: 17,
        period: 7,
        name: "Tennessine",
        cat: "halogen"
    }, {
        no: 118,
        sym: "Og",
        group: 18,
        period: 7,
        name: "Oganesson",
        cat: "noble"
    },

    // spl case of period 7
    {
        no: 89,
        sym: "Ac",
        group: 3,
        period: 10,
        name: "Actinium",
        cat: "actinides"
    },
    {
        no: 90,
        sym: "Th",
        group: 4,
        period: 10,
        name: "Thorium",
        cat: "actinides"
    },
    {
        no: 91,
        sym: "Pa",
        group: 5,
        period: 10,
        name: "Protactinium",
        cat: "actinides"
    },
    {
        no: 92,
        sym: "U",
        group: 6,
        period: 10,
        name: "Uranium",
        cat: "actinides"
    },
    {
        no: 93,
        sym: "Np",
        group: 7,
        period: 10,
        name: "Neptunium",
        cat: "actinides"
    },
    {
        no: 94,
        sym: "Pu",
        group: 8,
        period: 10,
        name: "Plutonium",
        cat: "actinides"
    },
    {
        no: 95,
        sym: "Am",
        group: 9,
        period: 10,
        name: "Americium",
        cat: "actinides"
    },
    {
        no: 96,
        sym: "Cm",
        group: 10,
        period: 10,
        name: "Curium",
        cat: "actinides"
    },
    {
        no: 97,
        sym: "Bk",
        group: 11,
        period: 10,
        name: "Berkelium",
        cat: "actinides"
    },
    {
        no: 98,
        sym: "Cf",
        group: 12,
        period: 10,
        name: "Californium",
        cat: "actinides"
    },
    {
        no: 99,
        sym: "Es",
        group: 13,
        period: 10,
        name: "Einsteinium",
        cat: "actinides"
    },
    {
        no: 100,
        sym: "Fm",
        group: 14,
        period: 10,
        name: "Fermium",
        cat: "actinides"
    },
    {
        no: 101,
        sym: "Md",
        group: 15,
        period: 10,
        name: "Mendelevium",
        cat: "actinides"
    },
    {
        no: 102,
        sym: "No",
        group: 16,
        period: 10,
        name: "Nobelium",
        cat: "actinides"
    },
    {
        no: 103,
        sym: "Lr",
        group: 17,
        period: 10,
        name: "Lawrencium",
        cat: "actinides"
    },
]