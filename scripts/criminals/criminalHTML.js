export const criminalHTMLConverter = (criminalObj) => {
    return `
    <section class="criminal-card">
        <h4>${criminalObj.name}</h4>
        <div>Age: ${criminalObj.age}</div>
        <div>Crime: ${criminalObj.conviction}</div>
        <div>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
        <dialog class="knownAssociates--${criminalObj.id}">
        ${
            criminalObj.known_associates.map(
                associateObj => {
                    return `<div>${associateObj.name}</div>
                    <div>${associateObj.alibi}</div>`
                }
            ).join("")
        }
        <button id="closeButton">x</button>
        </dialog>
        </section>
        
        
        `
    }