import { personForm } from "./personForm.js";
import { persons } from "./persons.js";
import { stats } from "./stats.js";

// Call the render methods to load the first datas
document.addEventListener("DOMContentLoaded", () => {

    personForm.render();

    persons.render();

    stats.render();

});