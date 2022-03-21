
import {pubSub} from "./pubSub.js";

export const persons = {

    list: [],

    // Subscribe to addName, to know when a person is added
    render() {
        console.log("Persons: Want to know a person is added");
        pubSub.subscribe('addName', persons.personAdded);
    },
    
    // Tell anyone who is listening that the list of person was updated
    personAdded: name => {
        console.log("Persons: I hear that " + name + " was added.");
        let list = new Set(persons.list);
        list.add(name);
        persons.list = Array.from(list).sort();
        
        console.log('Persons: personUpdated the list');
        pubSub.publish('personsUpdated', persons.list);
        
        let ul = document.querySelector("#list-people ul");
        ul.innerHTML = "";
        let df = document.createDocumentFragment();
        persons.list.forEach(person => {
            let li = document.createElement("li");
            li.innerText = person;
            li.addEventListener("click", persons.personRemoved);
            df.appendChild(li);
        });
        ul.appendChild(df);
    },
    
    // Tell anyone who is listening that the list of person was updated
    personRemoved: event => {
        let item = event.target;
        let name = item.textContent;
        let ul = document.querySelector("#list-people ul");
        persons.list = persons.list.filter(elt => elt !== name);
        pubSub.publish('personsUpdated', persons.list);
        ul.removeChild(item);
        console.log("Persons: I hear that " + name + " was removed.");
        console.log('Persons: personUpdated the list');
    }

}

