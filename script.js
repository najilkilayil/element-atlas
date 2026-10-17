
elements.forEach(element => {
    let card = document.createElement("div")

    card.className = "card_element"
    card.style.gridColumn = element.group
    card.style.gridRow = element.period

    card.innerHTML = `${element.sym}`

    let periodicTable = document.querySelector(".periodic_table")
    periodicTable.appendChild(card)
    card.addEventListener("click", function () {
        showDetails(element.sym , element.no, element.name)
    })
})

let detailsBox = document.getElementById("details")
let elementSymBox = document.getElementById("element_sym")
let elementInfoBox = document.getElementById("element_info")

function showDetails(sym, no, name) {
    detailsBox.style.display = "flex"
    detailsBox.id = "details"
    detailsBox.style.opacity = "1"

    elementSymBox.style.display = "none"
    elementInfoBox.style.display = "none"

    detailsBox.id = "show_box_anim"

    setTimeout(() => {
        detailsBox.id = "box_full_size_anim"
        // detailsBox.style.width = "40%"
        // detailsBox.style.height = "100px"
        setTimeout(() => {
            elementInfoBox.innerHTML = `
                <p>${no}</p>
                <p>${name}</p>
            `
            elementSymBox.innerHTML = sym

            elementSymBox.style.display = "flex"
            elementInfoBox.style.display = "block"

            setTimeout(() => {
                detailsBox.id = "box_fade_out_anim"

                detailsBox.addEventListener("animationend", function hideBox(event) {
                    if (event.animationName === "box_fade_out") {
                        detailsBox.style.display = "none"
                        detailsBox.id = "details"

                        elementInfoBox.style.display = "none"
                        elementSymBox.style.display = "none"

                        detailsBox.style.opacity = "1"
                        detailsBox.removeEventListener("animationend", hideBox)
                    }
                })
            }, 3000);
        }, 600);
    }, 500);
}
