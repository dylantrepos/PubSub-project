const pubSub = require('./pubSub.js');

test('Someone subscribe to an event', () => {
    pubSub.subscribe('addName', () => (true));
    expect(pubSub.subscribers['addName']).toBeTruthy();
    expect(Object.keys(pubSub.subscribers).length).toBe(1);
});

test('Someone publish an event', () => {

    const callbackTest = jest.fn();
    pubSub.subscribe('addName', callbackTest);
    pubSub.publish('addName', 'newName');
    expect(callbackTest).toHaveBeenCalled();

})

test('Someone unsubscribe to an event', () => {

    // Remove all the subscriber for the pubSub component 
    pubSub.subscribers = {};
    const callbackTest = jest.fn();
    // Add a subscriber
    pubSub.subscribe('addName', callbackTest);
    expect(pubSub.subscribers['addName'].length).toBe(1);
    // Remove a subscriber
    pubSub.unsubscribe('addName', callbackTest);
    expect(pubSub.subscribers['addName'].length).toBe(0);

})