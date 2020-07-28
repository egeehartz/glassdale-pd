import {useOfficers, getOfficers} from "./officerProvider.js"



//so our javascript will work within this parent element
//<select> will be rendered in these DOM elements because we rendered them
const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

//contentTarget is listening for a change event (in this case, a user selecting from dropdown)
contentTarget.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("officerSelected", {
        detail: {
            officerId: changeEvent.target.value
        } //custom events must have an object with detail as a property
        //detail's value must also be an object
        //officerId was agreed upon as the name 
    })

    eventHub.dispatchEvent(customEvent) 
    //exporting to the Hub aka .container
    //customEvent because of line 10
})


//BUT WAIT. We gotta get the info first from our provider

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an arresting officer...</option>
        ${
            officerCollection.map(
                officerObj => {
                    return `<option value="${officerObj.id}">${officerObj.name}</option>`
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