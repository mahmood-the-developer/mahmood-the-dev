import { getNav } from "../main-nav/index.js";
import { container } from "./elements/container.js";
import { logo } from "./elements/logo.js";
import { wrapper } from "./elements/wrapper.js";

export function getHeader()
{   const nav=getNav()
    container.append(logo,nav)
    wrapper.append(container)
    
    return wrapper
}