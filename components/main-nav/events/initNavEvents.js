import { renderAboutMe } from "../../pages/About.js"
import { renderHome } from "../../pages/Home.js"

export function initNavEvents()
{
    window.addEventListener("mousedown",(e)=>{
        if(e.target.classList.contains("nav__home"))
        {
            
            
            if(!history.state || history?.state?.page!="1")
            {
                renderHome()
                history.pushState({page:"1"},"home","?=home")

            }
            
            
        }
        else if(e.target.classList.contains("nav__aboutMe"))
        {
            if(history?.state?.page!="2")
            {
                history.pushState({page:"2"},"home","?=about")
                renderAboutMe()

            }
        }
    })
}