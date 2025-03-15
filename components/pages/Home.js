import { body } from "../../main.js";
import { getFooter } from "../footer/index.js";
import { getHeader } from "../header/index.js";
import { getRecentProduct } from "../recent-product/index.js";


export function renderHome() {
    body.innerHTML = "";
    const header = getHeader();
    const recentProduct = getRecentProduct();
    const footer=getFooter()
    body.append(
        header,
        recentProduct,
        footer,
    );
}
