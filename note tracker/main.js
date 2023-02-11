const inputEl = document.querySelector("#input-el")
const saveEl = document.querySelector("#save-el")
const saveTabEl = document.querySelector("#save-tab-el")
const deleteEl = document.querySelector("#delete-el")
const ulEl = document.querySelector("#ul-el")

let notes = []
const localStorageNotes = JSON.parse(localStorage.getItem("myNotes"))

if(localStorageNotes) {
	notes = localStorageNotes
	render(notes)
}

function render(notesList) {
    let list = ""
    for (let i = 0; i < notesList.length; i++) {
        list += `<li>${notesList[i]}</li>`
    }
    ulEl.innerHTML = list
}

saveEl.addEventListener("click", function () {
	if(inputEl.value){
            notes.push(inputEl.value)
            inputEl.value = ""
	    render(notes)
	    localStorage.setItem("myNotes", JSON.stringify(notes))
        }
    
})

saveTabEl.addEventListener("click", function () {
	chrome.tabs.query({currentWindow: true, active: true, lastFocusedWindow: true}, function(tabs){
		notes.push(tabs[0].url)
		})
        
        inputEl.value = ""
	render(notes)
	localStorage.setItem("myNotes", JSON.stringify(notes))
        
    
})


deleteEl.addEventListener("click", function () {
	localStorage.clear()
	notes = []
	render(notes)
})