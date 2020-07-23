/* The ConvictionSelect component, which will invoke useConvictions() 
and then iterate that collection to fill out the dropdown in the browser. */

import {useCrimes, getCrimes} from "./convictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

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
                     crimeCollection.map(crimeVar => {
                     return `<option>${crimeVar.name}</option>`
                     }).join("")
                 } 
             </select>
             ` 
         }
          
        
         
    
        
}