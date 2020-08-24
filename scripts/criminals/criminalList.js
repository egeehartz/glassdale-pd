import {getCriminals, useCriminals} from './criminalProvider.js'
import { criminalHTMLConverter } from './criminalHTML.js'
import { useCrimes } from '../convictions/convictionProvider.js'
import { showInfo } from '../AlibiButton.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import { useFacilities } from './FacilityProvider.js'
import {getFacilities} from './FacilityProvider.js'

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



const render = (arrayOfCriminals, crimFacArray, facilityArray) => {
    const rep = arrayOfCriminals.map( criminal => {
        const facilityForCriminal = crimFacArray.filter(cf => {
            return cf.criminalId === criminal.id
        })

        const facilities = facilityForCriminal.map(cf => {
            const matchingFacility = facilityArray.find(facility => {
                return facility.id === cf.facilityId
            })
            return matchingFacility
        })
        return criminalHTMLConverter(criminal, facilities)
    }).join("")
    contentTarget.innerHTML = rep

} //end of render

export const criminalList = () => {
    
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(() => {
            const criminalArray = useCriminals()
            const crimFacilities = useCriminalFacilities()
            const facilities = useFacilities()
            render(criminalArray, crimFacilities, facilities)
            
    })
    .then(showInfo)

}
