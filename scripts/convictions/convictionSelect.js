/* The ConvictionSelect component, which will invoke useConvictions() 
and then iterate that collection to fill out the dropdown in the browser. */

import {useCrimes, getCrimes} from "./convictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("crimeSelected", {
        detail: {
            crimeId: changeEvent.target.value
        }
    })

    eventHub.dispatchEvent(customEvent)
})




export const crimeSelect = () => {
    
    getCrimes().then(() => {
         const crimes = useCrimes()
         render(crimes)
    })

         const render = crimeCollection => {
             contentTarget.innerHTML = `
             <select class="dropdown" id="crimeSelect">
                 <option value="0">Please select a crime. . .</option>
                 ${
                     crimeCollection.map(crimeObj => {
                     return `<option value="${crimeObj.id}">${crimeObj.name}</option>`
                     }).join("")
                 } 
             </select>
             ` 
         }
          
        
         
    
        
}