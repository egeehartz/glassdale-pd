import {getOfficers, useOfficers} from './officerProvider.js'
//import { officerHTMLConverter } from './officerHTML.js'
import { criminalHTMLConverter } from '../criminals/criminalHTML.js'
import { useCriminals } from "../criminals/criminalProvider.js"


const contentTarget = document.querySelector(".offContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
    const officerThatWasSelected = officerSelectedEvent.detail.officerId

    const arrayOfOfficers = useOfficers()
    const foundOfficerObj = arrayOfOfficers.find(
        (officer) => {
            return parseInt(officerThatWasSelected) === officer.id
        }
    )

    const allCriminals = useCriminals()
    const filteredCriminals = allCriminals.filter(
        (currentCriminalObj) => {
            return foundOfficerObj.name === currentCriminalObj.arrestingOfficer
        }
    )
    render(filteredCriminals)
    
})

const render = (arrayOfCriminals) => {
    let criminalHTML = ""
    arrayOfCriminals.forEach(criminal => {
        criminalHTML += criminalHTMLConverter(criminal)
    })
    contentTarget.innerHTML = `
    <h2>Glassdale Criminals arrested by...</h2>
    <article class="officersContainer">
    ${criminalHTML}
    </article>
    `
}





export const officerList = () => {
    
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            render(officerArray)
            })
}
