
const eventHub = document.querySelector(".container")

export const showInfo = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("associates--")) {
            const classArrayIndexOne = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.knownAssociates--${classArrayIndexOne}`)
            contentTarget.showModal()
        }
        else if (clickEvent.target.id === "closeButton") {
            const theDialog = clickEvent.target.parentNode
            theDialog.close()
        }

    })

}




