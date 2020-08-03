
const eventHub = document.querySelector(".container")

export const showInfo = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("associates--")) {
            const classArray = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.knownAssociates--${classArray}`)
            contentTarget.showModal()
        }
        
    })

}




