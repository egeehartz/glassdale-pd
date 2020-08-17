let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () =>{
    return notes.slice()
}


export const getNotes = () => {
    return fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const deleteNote = (noteId) => {
    return fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "DELETE",
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}


export const saveNote = (note) => {
    const jsonNote = JSON.stringify(note)

    return fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonNote
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}