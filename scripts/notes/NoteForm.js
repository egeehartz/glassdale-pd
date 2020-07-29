import {saveNote} from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")

        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now()
        }
        saveNote(newNote)
    }
})


const render = () => {
    contentTarget.innerHTML = `
        <input type="text" placeholder="Enter Title Here" id="note--title" />
        <input type="text" placeholder="Your name here" id="note--author" />
        <textarea type="text" placeholder="text" id="note--content"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}