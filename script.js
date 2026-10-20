
elements.forEach(element => {
    let card = document.createElement("div")

    card.className = "card_element"
    card.style.gridColumn = element.group
    card.style.gridRow = element.period
    card.id = element.cat

    card.innerHTML = `${element.sym}`

    let periodicTable = document.querySelector(".periodic_table")
    periodicTable.appendChild(card)
    card.addEventListener("click", function () {
        if (element.group === 3 && element.period === 6) {
            highlight("9")
        }
        else if (element.group === 3 && element.period === 7) {
            highlight("10")
        }
        else {
            showDetails(element.sym, element.no, element.name, element.group, element.period, element.cat)
        }
    })
})

let detailsBox = document.getElementById("details")
let elementSymBox = document.getElementById("element_sym")
let elementInfoBox = document.getElementById("element_info")

function showDetails(sym, no, name, group, period, cat) {
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
                <div class="period_group" id="period_group">
                    <p>Group: ${group} &emsp;</p>
                    <p>&emsp;Period: ${period}</p>
                </div>
            `
            elementSymBox.innerHTML = sym
            elementSymBox.id = cat

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

function highlight(Row) {
    let delayAdd = 0
    let delayRemove = 0
    let cards = document.querySelectorAll(".card_element")

    cards.forEach(card => {
        if (card.style.gridRow === Row) {
            setTimeout(() => {
                card.style.outline = "1px solid #67E8F9"
            }, delayAdd);

            delayAdd = delayAdd + 100
        }
    })

    setTimeout(() => {
        cards.forEach(card => {
            if (card.style.gridRow === Row) {
                setTimeout(() => {
                    card.style.outline = ""
                }, delayRemove);

                delayRemove = delayRemove + 100
            }
        })
    }, delayAdd);
}

let searchMain = document.getElementById("search")
let searchBar = document.getElementById("search_bar")
let clickedOrNot = false

searchMain.addEventListener("mouseover", function () {
    searchMain.style.width = "30%"
})

searchMain.addEventListener("mouseleave", function () {
    if (!clickedOrNot) {
        searchMain.style.width = "50px"
    }
})

searchMain.addEventListener("click", function () {
    clickedOrNot = true
    searchMain.style.width = "30%"
    searchBar.focus()
})

document.addEventListener("click", function (event) {
    if (!searchMain.contains(event.target)) {
        searchMain.style.width = "50px"
    }
})

searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let searchItem = searchBar.value.trim().toLowerCase()
        console.log(searchItem)

        let searchPass
        searchPass = elements.find(element => 
            element.name.toLowerCase() === searchItem ||
            element.sym.toLowerCase() === searchItem ||
            String(element.no) === searchItem
        )

        if (searchPass) {
            console.log(`${searchPass.name} - ${searchPass.sym} - ${searchPass.no}`)
            showDetails(searchPass.sym, searchPass.no, searchPass.name, searchPass.group, searchPass.period)
        }
        else {
            console.log("Invalid Input")
            showDetails("Error", "Invalid Input", "Search not found" , "" , "")
        }

        searchBar.value = ""
        searchMain.style.width = "50px"
    }
})

highlight("1")
highlight("2")
highlight("3")
highlight("4")
highlight("5")
highlight("6")
highlight("7")