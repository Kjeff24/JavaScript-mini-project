const countEl = document.querySelector("#count-el")
const btns = document.querySelectorAll(".btns")
let count = 0

function changeCountColor(count) {
    if(count === 0) {
        countEl.style.color = "black"
    }else if (count > 0 ) {
        countEl.style.color = "violet"
    }else {
        countEl.style.color = "red"
    }
}

// loop through the buttons and add event listeners
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        // get the class whose event listerner triggered the event
        let btnTrig = e.currentTarget.classList
	if(btnTrig.contains("increase-btn")){
	    count++ 
        }else if (btnTrig.contains("decrease-btn")){
	    count--  
        }else if (btnTrig.contains("reset-btn")){
	    count = 0
        }
	countEl.textContent = count
	changeCountColor(count)
    })

})


