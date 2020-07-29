import {useOfficers, getOfficers} from "./officerProvider.js"



//so our javascript will work within this parent element
//<select> will be rendered in these DOM elements because we rendered them
const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

//eventHub is listening for a change event (in this case, a user selecting from dropdown)
eventHub.addEventListener("change", (changeEvent) => {
        if(changeEvent.target.id === "officerSelect") {
            const officerEvent = new CustomEvent("officerSelected", {
                detail: {
                    officerId: changeEvent.target.value
                }  
            })
    eventHub.dispatchEvent(officerEvent) 
        }

    })


//BUT WAIT. We gotta get the info first from our provider

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an arresting officer...</option>
        ${
            officerCollection.map(
                officerObj => {
                    return `<option value="${officerObj.name}">${officerObj.name}</option>`
                }
            ).join("")
        }
    </select>`
}

export const officerSelect = () => {
    getOfficers().then(() => {
        const officers = useOfficers()
        render(officers)
    })
}