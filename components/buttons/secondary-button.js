export function CreateSecondaryButton(name, action = () => { }) {
    const button = document.createElement("button")
    button.classList.add("button__secondary");
    button.addEventListener("click", (e) => {
        action(e)
    })
    button.innerText = name
    return button

}