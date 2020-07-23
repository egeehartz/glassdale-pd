import {getCriminals, useCriminals} from './criminalProvider.js'
import { criminalHTMLConverter } from './criminalHTML.js'

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            let criminalHTMLRepresentation = ""
            criminalArray.forEach(criminal => {
                criminalHTMLRepresentation += criminalHTMLConverter(criminal)
            })

        contentTarget.innerHTML = criminalHTMLRepresentation
    })

}
