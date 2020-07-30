const author = document.getElementById("note--author")


export const authorValidate = () => {
author.addEventListener("input", (inputEvent) => {
    if (author.value === "") {
        alert("This field is required");
    }
})

}