import { body } from "../../main.js";
import { getFooter } from "../footer/index.js";
import { getHeader } from "../header/index.js";
import { getRecentProduct } from "../recent-product/index.js";


export function renderAboutMe() {
    body.innerHTML = "";
    const header = getHeader();
    const footer=getFooter();
    const recentProduct = getRecentProduct();
    body.append(
        header,
        footer
    );
}
