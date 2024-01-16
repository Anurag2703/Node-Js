import { EventEmitter } from 'node:events';     //Importing style in ES6 modules

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn off the motor! A gentle reminder.');
    }, 3000);
});

console.log("The script is running!");
myEmitter.emit('WaterFull');
console.log("The script is still running!");
