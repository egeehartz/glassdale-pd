import { witnessHTMLConverter } from "./WitnessHTML.js"
import {useWitness,getWitness} from "./WitnessProvider.js"


const contentTarget = document.querySelector(".criminalsContainer")


const render = (arrayOfWitnesses) => {
    let witnessHTML = ""
    arrayOfWitnesses.forEach(witness => {
        witnessHTML += witnessHTMLConverter(witness)
    })
    contentTarget.innerHTML = `
        <article class="witnessList">
        <h4>Witness List</h4>
            ${witnessHTML}
        </article>
    `
}


export const witnessList = () => {
    getWitness()
        .then(() => {
            const witnessArray = useWitness()
            render(witnessArray)
        })
        
} 

