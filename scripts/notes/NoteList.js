import {getNotes,useNotes} from "./NoteDataProvider.js"
import {noteHTMLConverter} from "./Note.js"
import {useCriminals} from "../criminals/criminalProvider.js"

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

export const NoteList = () => {
    getNotes()
    .then(useNotes)
    .then(render)
}

const render = (noteArray) => {
    const criminalArray = useCriminals()
    
    const allNotesHTML = noteArray.reverse().map(
        (currentNote) => {
            const criminalVar = criminalArray.find(criminal => {
                return criminal.id === currentNote.criminalId
            })
            
            return noteHTMLConverter(currentNote, criminalVar)
        }
        ).join("")
        
        contentTarget.innerHTML = allNotesHTML
    }
    
    eventHub.addEventListener("noteStateChanged", () => {
        const updatedNotes = useNotes()
        render(updatedNotes)
    })

    eventHub.addEventListener("showNotesClicked", NoteList)
    eventHub.addEventListener("hideNotesClicked", customEvent => {
        contentTarget.innerHTML = ``
    })