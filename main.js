import { initNavEvents } from "./components/main-nav/events/initNavEvents.js";
import { initNavigation } from "./components/navigation/index.js";
import { renderHome } from "./components/pages/Home.js";

export const body = document.body;
initNavigation()
initNavEvents()
renderHome();



