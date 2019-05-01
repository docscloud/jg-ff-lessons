function EventBus() {
  let listeners = {
    event_one: [],
    event_two: []
  };

  this.addListener = function(event, listener) {
    listeners[event].push(listener);
  };

  this.dispatchEvent = function(event) {
    for (let key in listeners) {
      for (let listener of listeners[key]) {
        listener();
      }
    }
  };
}

const bus = new EventBus();

function listenerOne() {
  console.log('listener one');
}
bus.addListener('event_one', listenerOne);

bus.dispatchEvent();
