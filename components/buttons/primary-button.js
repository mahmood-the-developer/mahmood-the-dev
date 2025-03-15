export function CreatePrimaryButton(name, action = () => { },className) {
    const button = document.createElement("button")
    button.classList.add("button__primary");
    button.addEventListener("click", (e) => {
        action(e)
    },)
    button.innerText = name
    button.classList.add(className)
    return button

}