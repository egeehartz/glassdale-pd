import { witnessList } from "./witnesses/WitnessList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessListButton")


export const showWitnesses = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "witnessButton") {
            witnessList()
        }
        
    })

}

export const showWitnessButton = () => {
    contentTarget.innerHTML = `<button id="witnessButton">Show Witnesses</button>`
}