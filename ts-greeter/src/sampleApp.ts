import { Greeter } from './greeter'

var greeter = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter.greet();