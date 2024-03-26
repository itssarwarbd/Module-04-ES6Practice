// ---------------====================ES6 Map 

var myMap = new Map();

myMap.set("key1", "Bangladesh");
myMap.set("key2", "India");
myMap.set("key3", "Pakistan");
myMap.set("key4", "Thailand");
myMap.set("key5", "Bhutan");

//console.log(myMap.values());
//console.log(myMap.keys());

//-===================== ES6 Map For Loop 

// for(let myValue of myMap.values()) {
//     console.log(myValue);
// }

// for(let myKey of myMap.keys()) {
//     console.log(myKey);
// }

//-===================== ES6 Map Delete/clear
//myMap.delete("key1");
myMap.clear();

for(let myValue of myMap.values()) {
    console.log(myValue);
}