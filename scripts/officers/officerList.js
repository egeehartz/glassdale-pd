import {getOfficers, useOfficers} from './officerProvider.js'
import { officerHTMLConverter } from './officerHTML.js'

const contentTarget = document.querySelector(".offContainer")

export const officerList = () => {
    
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let officerHTMLRepresentation = ""
            officerArray.forEach(officer => {
                officerHTMLRepresentation += officerHTMLConverter(officer)
            })

        contentTarget.innerHTML = `
        <h2>Glassdale PD Officers</h2>
        <article class="officersContainer">
        ${officerHTMLRepresentation}
        </article>
        `
    })

}
