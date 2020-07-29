const contentTarget = document.querySelector(".noteListButton")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent('showNotesClicked')
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
        contentTarget.innerHTML="<button id='showNotes'>Show Notes</button>"
}