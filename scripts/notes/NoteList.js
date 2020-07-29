import {getNotes} from "./NoteDataProvider.js"
import {noteHTMLConverter} from "./Note.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("ShowNotesClicked", customEvent => {
    NoteList()
})


const render = (noteArray) => {
    const allNotesHTML = noteArray.map(
        (currentNote) => {
            return noteHTMLConverter(currentNote)
        }
    ).join(",")
        contentTarget.innerHTML = allNotesHTML
}


export const NoteList = () => {
    getNotes().then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}