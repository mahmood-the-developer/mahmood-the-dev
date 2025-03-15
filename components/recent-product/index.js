import { header } from "./elements/header.js";
import { img } from "./elements/image.js";
import { wrapper } from "./elements/wrapper.js";
import { description } from "./elements/description.js";
import { container } from "./elements/container.js";
export function getRecentProduct()
{
    wrapper.append(header);
    wrapper.querySelector(".flex").append(description,img);
  
    container.append(wrapper)
    return container
}