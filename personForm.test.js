/**
 * @jest-environment jsdom
 */
 import {jest} from '@jest/globals'
import { personForm } from "./personForm.js";
import { pubSub } from "./pubSub.js";


test('The form publish a new name', () => {

    document.body.innerHTML = `<form id="add-person">
                                <h1>People</h1>
                                <input type="text" name="name" id="name" placeholder="name..." value="Jean">
                                <button type="submit" id="btn-add">Add a person</button>
                            </form>`

    // Create a listener
    let myNames = ["Pierre"];
    const addNewName = (name) => myNames.push(name);
    pubSub.subscribe('addName', addNewName);
    expect(myNames.length).toBe(1);
    
    const inputForm = document.querySelector("#add-person input");
    const buttonForm = document.querySelector("#btn-add");
    buttonForm.addEventListener("click", personForm.personAdd);
    buttonForm.click();
    expect(myNames.length).toBe(2);
    expect(myNames[0]).toBe("Pierre");
    expect(myNames[1]).toBe("Jean");

});