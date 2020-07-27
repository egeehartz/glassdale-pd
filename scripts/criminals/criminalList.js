import {getCriminals, useCriminals} from './criminalProvider.js'
import { criminalHTMLConverter } from './criminalHTML.js'
import { crimeSelect } from '../convictions/convictionSelect.js'
import { useCrimes } from '../convictions/convictionProvider.js'

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
        


    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId

    const arrayOfCrimes = useCrimes()
    const foundCrimeObj = arrayOfCrimes.find(
        (crime) => { 

            return parseInt(crimeThatWasSelected) === crime.id
        }
    )

    //foundCrimeObj.name

        const allCriminals = useCriminals()
        const filteredCriminals = allCriminals.filter(
            (currentCriminalObj) => {
                return foundCrimeObj.name === currentCriminalObj.conviction
            }
        )
render (filteredCriminals)


})

const render = (arrayOfCriminals) => {
    let criminalHTML = ""
    filteredCriminals.forEach(criminal => {
        criminalHTML += criminalHTMLConverter(criminal)
    })
    
    contentTarget.innerHTML = `
    <h2>Glassdale Convicted Criminals</h2>
    <article class="criminalList">
    ${criminalHTML}
    </article>`
    
 /*   let criminalHTMLRepresentation = ""
    arrayOfCriminals.forEach(criminal => {
        criminalHTMLRepresentation += criminalHTMLConverter(criminal)
    }) 
contentTarget.innerHTML = criminalHTMLRepresentation 
} */

export const criminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
            
    })

}
