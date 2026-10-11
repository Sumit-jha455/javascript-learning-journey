// variable bnane ka tarika

// 1. using let : iski value baad mein change ho skti hai

// let name = "Sumit"
// name = "Ramesh"
// console.log(name);

// 2. using const keyword: iski value baad mein change nhi hoti

// const name = "sumit"
// name = "ramesh"
// console.log(name)


// 3. using var ( old method) - same variable ko multiple time declare kr skte hai

// var a = 10;
// var a = 20;
// console.log(a)
// ye window mein add hota hai aur global variable ban jata hai
// function scoped hota hai aur block scoped nhi hota hai ----> iska mtlb ye hai ki agar aapne var ko function ke andar declare kiya hai to wo sirf usi function ke andar hi accessible hoga aur agar aapne var ko function ke bahar declare kiya hai to wo global variable ban jata hai aur aap usko kahi bhi access kr skte ho
// aap firse declare kr skte ho aur firse assign kr skte ho


// temperal zone are ----> utna area jitne mein js ko pta to hai ki variable exist krta hai par wo apko value nhi dega aur aapko error dega ki variable is not defined , ye bas const aur let ke sath hota hai var ke sath nhi hota hai


// hoisting ----> ek variable ko jab js mein bnate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai aur assign part niche chala jaata hai , isiliye agar aapne variable ko declare kiya hai to wo variable upar chala jaata hai aur aapko error nhi dega ki variable is not defined , ye bas const aur let ke sath hota hai var ke sath nhi hota hai


// var, let aur const mein differences:
//
// 1. Declaration aur assignment:
//    - var ko declare karke baad mein assign kar sakte hain. Ise redeclare bhi kar sakte hain.
//    - let ko declare karke baad mein assign kar sakte hain, lekin same scope mein redeclare nahi kar sakte.
//    - const ko declare karte samay hi value deni zaroori hai aur baad mein reassign nahi kar sakte.
//
// 2. Scope:
//    - var function-scoped hota hai.
//    - let aur const block-scoped hote hain ({} ke andar).
//
// 3. Hoisting aur Temporal Dead Zone:
//    - var hoist hota hai aur initial value undefined hoti hai.
//    - let aur const hoist hote hain, lekin declaration se pehle access karne par
//      Temporal Dead Zone ki wajah se ReferenceError aata hai.
//
// 4. Global object:
//    - Browser mein global scope par var, window object ki property ban sakta hai.
//    - let aur const global object ki property nahi bante.
//
// Example:
// var a = 10;
// var a = 20; // allowed
//
// let b = 10;
// b = 20;     // allowed
// // let b = 30; // same scope mein redeclaration nahi
//
// const c = 10;
// // c = 20;    // reassign nahi kar sakte


