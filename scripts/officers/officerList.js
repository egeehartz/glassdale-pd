import {getOfficers, useOfficers} from './officerProvider.js'
//import { officerHTMLConverter } from './officerHTML.js'



const contentTarget = document.querySelector(".officerContainer")
const eventHub = document.querySelector(".container")





export const officerList = () => {
    
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            render(officerArray)
            })
}
