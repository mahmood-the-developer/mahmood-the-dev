import { container } from "./elements/container.js";
import { contact } from "./elements/contact.js";
import { wrapper } from "./elements/wrapper.js";

export function getFooter() {
    wrapper.append(container)
    container.append(contact)
    return wrapper
}