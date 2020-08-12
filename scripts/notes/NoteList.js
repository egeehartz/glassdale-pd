import {getNotes,useNotes} from "./NoteDataProvider.js"
import {noteHTMLConverter} from "./Note.js"
import {getCriminals, useCriminals} from "../criminals/criminalProvider.js"

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
        .then(getCriminals)
        .then(() => {
            const allNotes = useNotes()
            const allCriminals = useCriminals()
        render(allNotes, allCriminals)
    })
}


const render = (noteArray, criminalArray) => {
    const allNotesHTML = noteArray.map(
        (currentNote) => {
            const criminalVar = criminalArray.find(criminal => {
                return criminal.id === currentNote.criminalId
            })

            return noteHTMLConverter(currentNote, criminalVar)
        }
    ).join("")

    contentTarget.innerHTML = allNotesHTML
}