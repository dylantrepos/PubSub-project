/**********
 *
 * pubsub.subscribe() on() add() listen()
 * pubsub.unsubscribe() off() remove() unlisten()
 * pubsub.publish() emit() announce()
 *
 * */

export const pubSub = {
    subscribers: {},

    publish(event, data) {
        if (!pubSub.subscribers[event]) return;

        console.log("%cSomeone publish on the event " + event + ", with the data : " + data, "color: yellow");
        pubSub.subscribers[event].forEach(subCallback => {
            subCallback(data);
        });
    },

    subscribe(event, callback) {
        if (!pubSub.subscribers[event]) {
            pubSub.subscribers[event] = [];
        }
        console.log("%cSomeone subscribe to the event " + event, "color: red");
        pubSub.subscribers[event].push(callback);
        console.log("%cSubscribers :" + "%c " + JSON.stringify(this.subscribers), 'background: blue', 'background: black');
    },

    unsubscribe(event, callback) {
        if(!pubSub.subscribers[event]) return;
        console.log("%cSomeone unsubscribe to the event " + event, "color: purple");
        pubSub.subscribers[event] = pubSub.subscribers[event].filter(element => element !== callback);
    }
}
