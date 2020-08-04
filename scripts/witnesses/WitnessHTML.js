export const witnessHTMLConverter = (witnessObj) => {
    return `
        <section>
            <div class="witnessCard">
            ${witnessObj.name} <br>
            ${witnessObj.statements}
            </div>
        </section>
    `
}