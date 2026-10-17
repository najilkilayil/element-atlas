const elements = [
    // period 1
    {
        no: 1,
        sym: "H",
        group: 1,
        period: 1
    },
    {
        no: 2,
        sym: "He",
        group: 18,
        period: 1
    },

    // period 2
    {
        no: 3,
        sym: "Li",
        group: 1,
        period: 2
    },
    {
        no: 4,
        sym: "Be",
        group: 2,
        period: 2
    },
    {
        no: 5,
        sym: "B",
        group: 13,
        period: 2
    },
    {
        no: 6,
        sym: "C",
        group: 14,
        period: 2
    },
    {
        no: 7,
        sym: "N",
        group: 15,
        period: 2
    },
    {
        no: 8,
        sym: "O",
        group: 16,
        period: 2
    },
    {
        no: 9,
        sym: "F",
        group: 17,
        period: 2
    },
    {
        no: 10,
        sym: "Ne",
        group: 18,
        period: 2
    },

    // period 3
    {
        no: 11,
        sym: "Na",
        group: 1,
        period: 3,
    },
    {
        no: 12,
        sym: "Mg",
        group: 2,
        period: 3,
    },
    {
        no: 13,
        sym: "Al",
        group: 13,
        period: 3,
    },
    {
        no: 14,
        sym: "Si",
        group: 14,
        period: 3,
    },
    {
        no: 15,
        sym: "P",
        group: 15,
        period: 3,
    },
    {
        no: 16,
        sym: "S",
        group: 16,
        period: 3,
    },
    {
        no: 17,
        sym: "Cl",
        group: 17,
        period: 3,
    },
    {
        no: 18,
        sym: "Ar",
        group: 18,
        period: 3,
    },

    // period 4
    {
        no: 19,
        sym: "K",
        group: 1,
        period: 4,
    },
    {
        no: 20,
        sym: "Ca",
        group: 2,
        period: 4,
    },
    {
        no: 21,
        sym: "Sc",
        group: 3,
        period: 4,
    },
    {
        no: 22,
        sym: "Ti",
        group: 4,
        period: 4,
    },
    {
        no: 23,
        sym: "V",
        group: 5,
        period: 4,
    },
    {
        no: 24,
        sym: "Cr",
        group: 6,
        period: 4,
    },
    {
        no: 25,
        sym: "Mn",
        group: 7,
        period: 4,
    },
    {
        no: 26,
        sym: "Fe",
        group: 8,
        period: 4,
    },
    {
        no: 27,
        sym: "Co",
        group: 9,
        period: 4,
    },
    {
        no: 28,
        sym: "Ni",
        group: 10,
        period: 4,
    },
    {
        no: 29,
        sym: "Cu",
        group: 11,
        period: 4,
    },
    {
        no: 30,
        sym: "Zn",
        group: 12,
        period: 4,
    },
    {
        no: 31,
        sym: "Ga",
        group: 13,
        period: 4,
    },
    {
        no: 32,
        sym: "Ge",
        group: 14,
        period: 4,
    },
    {
        no: 33,
        sym: "As",
        group: 15,
        period: 4,
    },
    {
        no: 34,
        sym: "Se",
        group: 16,
        period: 4,
    },
    {
        no: 35,
        sym: "Br",
        group: 17,
        period: 4,
    },
    {
        no: 36,
        sym: "Kr",
        group: 18,
        period: 4,
    },

    // period 5
    {
        no: 37,
        sym: "Rb",
        group: 1,
        period: 5,
    },
    {
        no: 38,
        sym: "Sr",
        group: 2,
        period: 5,
    },
    {
        no: 39,
        sym: "Y",
        group: 3,
        period: 5,
    },
    {
        no: 40,
        sym: "Zr",
        group: 4,
        period: 5,
    },
    {
        no: 41,
        sym: "Nb",
        group: 5,
        period: 5,
    },
    {
        no: 42,
        sym: "Mo",
        group: 6,
        period: 5,
    },
    {
        no: 43,
        sym: "Tc",
        group: 7,
        period: 5,
    },
    {
        no: 44,
        sym: "Ru",
        group: 8,
        period: 5,
    },
    {
        no: 45,
        sym: "Rh",
        group: 9,
        period: 5,
    },
    {
        no: 46,
        sym: "Pd",
        group: 10,
        period: 5,
    },
    {
        no: 47,
        sym: "Ag",
        group: 11,
        period: 5,
    },
    {
        no: 48,
        sym: "Cd",
        group: 12,
        period: 5,
    },
    {
        no: 49,
        sym: "In",
        group: 13,
        period: 5,
    },
    {
        no: 50,
        sym: "Sn",
        group: 14,
        period: 5,
    },
    {
        no: 51,
        sym: "Sb",
        group: 15,
        period: 5,
    },
    {
        no: 52,
        sym: "Te",
        group: 16,
        period: 5,
    },
    {
        no: 53,
        sym: "I",
        group: 17,
        period: 5,
    },
    {
        no: 54,
        sym: "Xe",
        group: 18,
        period: 5,
    },

    // period 6
    {
        no: 55,
        sym: "Cs",
        group: 1,
        period: 6,
    },
    {
        no: 56,
        sym: "Ba",
        group: 2,
        period: 6,
    },
    {
        // no: 57,
        sym: "Ce - Lu",
        group: 3,
        period: 6,
    },
    {
        no: 72,
        sym: "Hf",
        group: 4,
        period: 6,
    },
    {
        no: 73,
        sym: "Ta",
        group: 5,
        period: 6,
    },
    {
        no: 74,
        sym: "W",
        group: 6,
        period: 6,
    },
    {
        no: 75,
        sym: "Re",
        group: 7,
        period: 6,
    },
    {
        no: 76,
        sym: "Os",
        group: 8,
        period: 6,
    },
    {
        no: 77,
        sym: "Ir",
        group: 9,
        period: 6,
    },
    {
        no: 78,
        sym: "Pt",
        group: 10,
        period: 6,
    },
    {
        no: 79,
        sym: "Au",
        group: 11,
        period: 6,
    },
    {
        no: 80,
        sym: "Hg",
        group: 12,
        period: 6,
    },
    {
        no: 81,
        sym: "Tl",
        group: 13,
        period: 6,
    },
    {
        no: 82,
        sym: "Pb",
        group: 14,
        period: 6,
    },
    {
        no: 83,
        sym: "Bi",
        group: 15,
        period: 6,
    },
    {
        no: 84,
        sym: "Po",
        group: 16,
        period: 6,
    },
    {
        no: 85,
        sym: "At",
        group: 17,
        period: 6,
    },
    {
        no: 86,
        sym: "Rn",
        group: 18,
        period: 6,
    },

    // spl case in period 6
    {
        no: 57,
        sym: "Ce",
        group: 3,
        period: 9,
    },
    {
        no: 58,
        sym: "Ce",
        group: 4,
        period: 9,
    },
    {
        no: 59,
        sym: "Pr",
        group: 5,
        period: 9,
    },
    {
        no: 60,
        sym: "Nd",
        group: 6,
        period: 9,
    },
    {
        no: 61,
        sym: "Pm",
        group: 7,
        period: 9,
    },
    {
        no: 62,
        sym: "Sm",
        group: 8,
        period: 9,
    },
    {
        no: 63,
        sym: "Eu",
        group: 9,
        period: 9,
    },
    {
        no: 64,
        sym: "Gd",
        group: 10,
        period: 9,
    },
    {
        no: 65,
        sym: "Tb",
        group: 11,
        period: 9,
    },
    {
        no: 66,
        sym: "Dy",
        group: 12,
        period: 9,
    },
    {
        no: 67,
        sym: "Ho",
        group: 13,
        period: 9,
    },
    {
        no: 68,
        sym: "Er",
        group: 14,
        period: 9,
    },
    {
        no: 69,
        sym: "Tm",
        group: 15,
        period: 9,
    },
    {
        no: 70,
        sym: "Yb",
        group: 16,
        period: 9,
    },
    {
        no: 71,
        sym: "Lu",
        group: 17,
        period: 9,
    },

    // period 7
    {
        no: 87,
        sym: "Fr",
        group: 1,
        period: 7,
    },
    {
        no: 88,
        sym: "Ra",
        group: 2,
        period: 7,
    }, {

        sym: "Ac - Lr",
        group: 3,
        period: 7,
    }, {
        no: 104,
        sym: "Rf",
        group: 4,
        period: 7,
    }, {
        no: 105,
        sym: "Db",
        group: 5,
        period: 7,
    }, {
        no: 106,
        sym: "Sg",
        group: 6,
        period: 7,
    }, {
        no: 107,
        sym: "Bh",
        group: 7,
        period: 7,
    }, {
        no: 108,
        sym: "Hs",
        group: 8,
        period: 7,
    }, {
        no: 109,
        sym: "Mt",
        group: 9,
        period: 7,
    }, {
        no: 110,
        sym: "Ds",
        group: 10,
        period: 7,
    }, {
        no: 111,
        sym: "Rg",
        group: 11,
        period: 7,
    }, {
        no: 112,
        sym: "Cn",
        group: 12,
        period: 7,
    }, {
        no: 113,
        sym: "Nh",
        group: 13,
        period: 7,
    }, {
        no: 114,
        sym: "Fl",
        group: 14,
        period: 7,
    }, {
        no: 115,
        sym: "Mc",
        group: 15,
        period: 7,
    }, {
        no: 116,
        sym: "Lv",
        group: 16,
        period: 7,
    }, {
        no: 117,
        sym: "Ts",
        group: 17,
        period: 7,
    }, {
        no: 118,
        sym: "Og",
        group: 18,
        period: 7,
    },

    // spl case of period 7
    {
        no: 89,
        sym: "Ac",
        group: 3,
        period: 10,
    },
    {
        no: 90,
        sym: "Th",
        group: 4,
        period: 10,
    },
    {
        no: 91,
        sym: "Pa",
        group: 5,
        period: 10,
    },
    {
        no: 92,
        sym: "U",
        group: 6,
        period: 10,
    },
    {
        no: 93,
        sym: "Np",
        group: 7,
        period: 10,
    },
    {
        no: 94,
        sym: "Pu",
        group: 8,
        period: 10,
    },
    {
        no: 95,
        sym: "Am",
        group: 9,
        period: 10,
    },
    {
        no: 96,
        sym: "Cm",
        group: 10,
        period: 10,
    },
    {
        no: 97,
        sym: "Bk",
        group: 11,
        period: 10,
    },
    {
        no: 98,
        sym: "Cf",
        group: 12,
        period: 10,
    },
    {
        no: 99,
        sym: "Es",
        group: 13,
        period: 10,
    },
    {
        no: 100,
        sym: "Fm",
        group: 14,
        period: 10,
    },
    {
        no: 101,
        sym: "Md",
        group: 15,
        period: 10,
    },
    {
        no: 102,
        sym: "No",
        group: 16,
        period: 10,
    },
    {
        no: 103,
        sym: "Lr",
        group: 17,
        period: 10,
    },
]