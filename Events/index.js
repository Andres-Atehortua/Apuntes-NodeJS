const { EventEmitter } = require("events");
const { SAVE } = require("./event-names");

const emitter = new EventEmitter();

emitter.on(SAVE, () => console.log("onSave activated 1"));
emitter.on(SAVE, () => console.log("onSave activated 2"));
emitter.on(SAVE, () => console.log("onSave activated 3"));

emitter.emit(SAVE);
