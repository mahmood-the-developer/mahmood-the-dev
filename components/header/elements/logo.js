export const logo = document.createElement("div");
logo.classList.add("header__logo")
const logoImage = document.createElement("img");
logoImage.classList.add("header__logoImage")
logoImage.src = "./images/logo.png"
logo.append(logoImage)