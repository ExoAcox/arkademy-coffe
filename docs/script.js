const popup = document.getElementById("popup")

document.getElementById("table").addEventListener("click", event => {

    // Get data value
    document.getElementById("cashier").value = event.target.parentElement.parentElement.querySelector(".xcashier").textContent
    document.getElementById("product").value = event.target.parentElement.parentElement.querySelector(".xproduct").textContent
    if (event.target.parentElement.parentElement.querySelector(".xcategory").textContent == "Food") {
        document.getElementById("category").selectedIndex = 0
    } else {
        document.getElementById("category").selectedIndex = 1
    }
    const zPrice = event.target.parentElement.previousElementSibling.textContent
    const regex = /\d/g
    const xPrice = zPrice.match(regex).join("")
    document.getElementById("price").value = xPrice

    // Popup window
    if (event.target.text == "Edit") {
        popup.querySelector("button").innerHTML = "Change"
        popup.classList.add("show")
        document.getElementById("popup-bg").classList.add("show")
        document.getElementById("cashier").focus()
    }
    if (event.target.text == "Delete") {
        document.getElementById("popup-del").classList.add("show")
        document.getElementById("popup-bg").classList.add("show")
    }
})

// Popup window (add)
function add() {
    document.getElementById("cashier").value = null
    document.getElementById("product").value = null
    document.getElementById("category").selectedIndex = null
    document.getElementById("price").value = null
    popup.querySelector("button").innerHTML = "Add"
    popup.classList.add("show")
    document.getElementById("popup-bg").classList.add("show")
    document.getElementById("cashier").focus()
}
document.getElementById("header").querySelector("a").addEventListener("click", () => {
    add()
})


// Close button
function closePress() {
    popup.classList.remove("show")
    document.getElementById("popup-del").classList.remove("show")
    document.getElementById("popup-bg").classList.remove("show")
}
const close = document.getElementsByClassName("close")
for (x = 0; x < close.length; x++) {
    close[x].addEventListener("click", () => {
        closePress()
    })
}

// Key shortcut
window.addEventListener("keydown", event => {
    if (document.getElementById("popup").className != "show") {
        if (event.code == "Space") {
            event.preventDefault()
            add()
        }
    }
    if (event.code == "Escape") {
        closePress()
    }
})