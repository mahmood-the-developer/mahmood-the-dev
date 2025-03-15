import { renderAboutMe } from "../pages/About.js"
import { renderHome } from "../pages/Home.js"


export function initNavigation()
{
    window.addEventListener("popstate", (e) => {

        if (history.state?.page == "1") {
            renderHome()
    
        }
        else if (history.state?.page == "2") {
            renderAboutMe()
        }
    })
}