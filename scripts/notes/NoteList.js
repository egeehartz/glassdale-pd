import {getNotes,useNotes} from "./NoteDataProvider.js"
import {noteHTMLConverter} from "./Note.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => {
    const updatedNotes = useNotes()
    render(updatedNotes)
})

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})
eventHub.addEventListener("hideNotesClicked", customEvent => {
    contentTarget.innerHTML = ``
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