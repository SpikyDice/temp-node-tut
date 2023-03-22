const { john, peter } = require(`./name`);

console.log(john, peter);
const { items, singlePerson } = require("./additional");

console.log(items[0]);
console.log(singlePerson.name);

require("./mind-grenade");
