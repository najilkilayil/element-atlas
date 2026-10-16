
const elements = [
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