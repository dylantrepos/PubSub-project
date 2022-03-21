
import {pubSub} from "./pubSub.js";

export const stats = {

     // Add an event listener to initialize the stats counter
    render() {
        counter.innerText = "0";
        console.log("Stats: Want to know if list of person is updated");
        pubSub.subscribe("personsUpdated", stats.updatedList);
    },
    
    // Update the list with the names
    updatedList: list => {
        const counter = document.querySelector("#counter");
        counter.innerText = list.length;
    }
}
