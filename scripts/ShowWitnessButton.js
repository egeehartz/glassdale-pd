import { witnessList } from "./witnesses/WitnessList.js"
import { criminalList } from "./criminals/criminalList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessListButtons")


export const showWitnesses = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "witnessButton") {
            witnessList()
        } 
        else if (clickEvent.target.id === "hideWitnessButton") {
            criminalList()
        }
        
    })

}

export const showWitnessButton = () => {
    contentTarget.innerHTML = `<button id="witnessButton">Show Witnesses</button>
    <button id="hideWitnessButton">Hide Witnesses</button>`
}
