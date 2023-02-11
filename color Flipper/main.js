const bgEl = document.querySelector("#bg-el")
const changeBtn = document.querySelector("#change-btn")
const containerBg = document.querySelector(".content")

const hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function randomNum() {
    let random = Math.floor(Math.random()*hexArr.length)
    return random
}

changeBtn.addEventListener("click", function() {
    let hexColor = "#"
    for(let i = 1; i <= 6; i++) {
        hexColor += hexArr[randomNum()]    
    } 
    containerBg.style.backgroundColor = hexColor    
    bgEl.textContent = hexColor
    
})