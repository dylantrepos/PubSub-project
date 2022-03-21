import {pubSub} from "./pubSub.js";

export const personForm = { 

// Add an event listener to initialize the button
    render() {
        const btn = document.querySelector('#btn-add');
        btn.addEventListener("click", personForm.personAdd);
    },
    
    // Tell anyone who is listening that a person was added
    personAdd: ev => {
            ev.preventDefault();
            const input = document.querySelector('form input');
            const name = input.value;
            if(name.length <= 0) return
            if(input) input.value = '';
            pubSub.publish('addName', name);
            console.log("personForm: added a new name on : addName, with data :" + name);
        }
    }
    
