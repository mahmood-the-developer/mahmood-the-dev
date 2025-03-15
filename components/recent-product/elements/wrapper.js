import { CreatePrimaryButton } from "../../buttons/primary-button.js";

export const wrapper = document.createElement("div");
wrapper.classList.add("recentProduct__wrapper");
const flex = document.createElement("div");
flex.classList.add("recentProduct__flex", "flex");
const downloadButton = CreatePrimaryButton("DOWNLOAD NOW!", (e) => {
    location.href = "https://sourceforge.net/projects/candy-doc/files/v2.0.0-beta/candy-doc.rar/download"

}, "recentProduct__button")

wrapper.append(downloadButton, flex)