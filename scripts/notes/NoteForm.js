import {saveNote} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")

        const noteCriminal = document.querySelector("#noteForm--criminal")
        
        if(noteTitle.value === "" || noteAuthor.value === "" || noteContent.value === "") {
            alert("This field is required!")
        } else {

            const newNote = {
            title: noteTitle.value,
            criminalId: parseInt(noteCriminal.value),
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now()
            }
            saveNote(newNote)
        } 
    }
})


const render = () => {
    const criminals = useCriminals()

    contentTarget.innerHTML = `
        <input type="text" placeholder="Enter Title Here" id="note--title" />
        
        
        <select id="noteForm--criminal" class="criminalSelect">
            <option value="0">Please select a criminal...</option>
                ${
                    criminals.map(criminal => {
                        return `<option value="${ criminal.id }">${ criminal.name }</option>`
                    }).join("")
                }
        </select>
        
       
        <input type="text" placeholder="Your name Here" id="note--author"  />
        
        
        <textarea type="text" placeholder="text" id="note--content"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
    render()
}