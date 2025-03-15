export function CreateFreezeButton(name) {
    const button = document.createElement("button")
    button.classList.add("button__freeze");
    button.innerText = name
    return button

}