const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent('showNotesClicked')
        eventHub.dispatchEvent(customEvent)
    }
    else if(clickEvent.target.id === "hideNotes") {
        const hideEvent = new CustomEvent('hideNotesClicked')
        eventHub.dispatchEvent(hideEvent)
    }
})

export const ShowNoteButton = () => {
        contentTarget.innerHTML=`
        <button id='showNotes'>Show Notes</button>
        <button id='hideNotes'>Hide Notes</button>`
}

