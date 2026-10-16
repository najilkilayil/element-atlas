
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
        sym: "Tx",
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
        sym: "TI",
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
        no: 58,
        sym: "Ce",
        group: 3,
        period: 9,
    },
    {
        no: 59,
        sym: "Pr",
        group: 4,
        period: 9,
    },
    {
        no: 60,
        sym: "Nd",
        group: 5,
        period: 9,
    },
    {
        no: 61,
        sym: "Pm",
        group: 6,
        period: 9,
    },
    {
        no: 62,
        sym: "Sm",
        group: 7,
        period: 9,
    },
    {
        no: 63,
        sym: "Eu",
        group: 8,
        period: 9,
    },
    {
        no: 64,
        sym: "Gd",
        group: 9,
        period: 9,
    },
    {
        no: 65,
        sym: "Tb",
        group: 10,
        period: 9,
    },
    {
        no: 66,
        sym: "Dy",
        group: 11,
        period: 9,
    },
    {
        no: 67,
        sym: "Ho",
        group: 12,
        period: 9,
    },
    {
        no: 68,
        sym: "Er",
        group: 13,
        period: 9,
    },
    {
        no: 69,
        sym: "Tm",
        group: 14,
        period: 9,
    },
    {
        no: 70,
        sym: "Yb",
        group: 15,
        period: 9,
    },
    {
        no: 71,
        sym: "Lu",
        group: 16,
        period: 9,
    },
]

elements.forEach(element => {
    let card = document.createElement("div")

    card.className = "card_element"
    card.style.gridColumn = element.group
    card.style.gridRow = element.period

    card.innerHTML = `${element.sym}`

    let periodicTable = document.querySelector(".periodic_table")
    periodicTable.appendChild(card)
})