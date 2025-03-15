export const contact=document.createElement("div");
contact.classList.add("footer__contact");

const phone=document.createElement("div");
phone.innerText="📲 +989930151706"

const email=document.createElement("div");
email.innerText="📩 mahmood.the.dev@gmail.com"
contact.append(phone,email);