let obj1={name:"Atul"};// copy by reference
obj2= obj1;

obj2.name="Rahul";

console.log(obj1.name);
console.log(obj2.name);
