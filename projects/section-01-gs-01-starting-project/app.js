
const button = document.querySelector("button")
const input = document.querySelector("input")
const list = document.querySelector("ul")

function clickEvent(event) {
    addGoal()
}

function addGoal() {
    const enteredValue = input.value
    const item  = document.createElement("li")

    item.textContent = enteredValue
    list.appendChild(item)

    input.value = ""
}

button.addEventListener("click", clickEvent)