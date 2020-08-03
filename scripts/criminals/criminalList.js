import {getCriminals, useCriminals} from './criminalProvider.js'
import { criminalHTMLConverter } from './criminalHTML.js'
import { useCrimes } from '../convictions/convictionProvider.js'
import { showInfo } from '../AlibiButton.js'

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
    const officerThatWasSelected = officerSelectedEvent.detail.officerId

    const allCriminals = useCriminals()
    const filteredByOfficer = allCriminals.filter(
        (currentCriminalObj) => {
            if (currentCriminalObj.arrestingOfficer === officerThatWasSelected) {
            return true
            }
            return false
        }
    )
    render(filteredByOfficer)
    
})

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
        //GOAL is to filter the displayed criminals by the crime that was chosen
    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId
    const arrayOfCrimes = useCrimes()
    const foundCrimeObj = arrayOfCrimes.find(
        (crime) => { 
            return parseInt(crimeThatWasSelected) === crime.id
        }
    )
        const allCriminals = useCriminals()
        const filteredCriminals = allCriminals.filter(
            (currentCriminalObj) => {
                return foundCrimeObj.name === currentCriminalObj.conviction
            }
        )
render (filteredCriminals)
})  //end of addEventListener



const render = (arrayOfCriminals) => {
    let criminalHTML = ""
    arrayOfCriminals.forEach(criminal => {
        criminalHTML += criminalHTMLConverter(criminal)
    })
    
    contentTarget.innerHTML = `
    <h2>Glassdale Convicted Criminals</h2>
    <article class="criminalList">
    ${criminalHTML}
    </article>
    `

} //end of render

export const criminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
            
    })
    .then(showInfo)

}
