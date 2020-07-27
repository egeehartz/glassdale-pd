/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(you_fill_this_in)
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            details: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ... you wrote awesome code here ...
        </select>
    `
}


const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}