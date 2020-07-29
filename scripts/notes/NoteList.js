import {getNotes,useNotes} from "./NoteDataProvider.js"
import {noteHTMLConverter} from "./Note.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})




export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}


const render = (noteArray) => {
    const allNotesHTML = noteArray.map(
        (currentNote) => {
            return noteHTMLConverter(currentNote)
        }
    ).join("")

    contentTarget.innerHTML = allNotesHTML
}