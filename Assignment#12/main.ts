// Storing names in an Array.

let names : string[] = ["Abdullah","Arif","Adil","Anas", "Ali","Zahid"];

// Add a message with name and use for-in loop to print the one by one.

for(let name in names){
    console.log(`${name}. Hello  ${names[name]} You are my friend.`);
}