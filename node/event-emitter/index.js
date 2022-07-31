// EventEmitter
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// listener.js
eventEmitter.on('test', () => {
  console.log('on test');
});

// emitter.js
eventEmitter.emit('test');


// PubSub
const Publisher = () => {
  let subscribers = [];

  const subscribe = (callback) => {
    subscribers = [...subscribers, callback]
  };

  const publish = (data) => {
    subscribers.forEach(callback => callback(data));
  };

  return {
    subscribe,
    publish,
  };
};

// publisher.js
const publisher = Publisher();

// subscribers.js
publisher.subscribe((data) => console.log('hello from subscriber 1', data));
publisher.subscribe((data) => console.log('hello from subscriber 2', data));
publisher.subscribe((data) => console.log('hello from subscriber 3', data));

publisher.publish('test2', true);