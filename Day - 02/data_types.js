// it has two data types

// 1. primitive data type - total 7 (Number,String,Boolean,undefined,null,BigInt,Symbol)

// 2. non - primitive - total 3 ( Array, ActiveXObject, function)

// number - ye 8 byte (64 bit) memory leta hai
// let a = 10
// let b = 2.78
// console.log(a,b)

// string
// let c = "strike is coming"
// let d = 'sumit'
// console.log(c,d)

// boolean
// let login = true;
// let f = false;
// console.log(login,f)

// undefined
// undefined ka mtlb ki aapne ek variable banya aur usey koui value nhi di to jo value by default aayegi wo undefined hogi
// let user;
// const admin; - it throw error
// console.log(user)

// bigint
// let a = 1236487943n
// console.log(a)
// console.log(typeof a)

// null - variable ke ander intentionally kuch store nhi krna hai
// null ka mtlb hai ki aapne jaan boojh krke koi value nhi di
// let weather = null;
// console.log(weather)

// symbol ----> unique immutable value ko represent krta hai , ye mostly object ke key ke liye use hota hai
// const id1 = Symbol("id");
// console.log(id1)


// array
// let arr = [2,3,"sumit",2.45]
// console.log(arr)

// object
// let user = {
//     name:"sumit",
//     age:18,
//     category:'gen'
// }
// console.log(user)

// function
// function add(){
//     console.log("hello");
// }
// add();

// javascript ke anadr jo function hai usko kisi variable ke andar store kr skkte hai

// let s = function add(){
//     console.log("Hello Sumit");
// }
// s();
// console.log(s)


// primitive data types are immutable

// let a = 10;
// a = 20;
// console.log(a)

// let b = "sumit";
// b = "hello";
// console.log(b)

// let a = 10;
// let b = a;
// b = 20;
// console.log(a,b) // 10,20


// non primitive data types are mutable.
// let arr = [1,2,3,4,5];
// arr[0] = 10;
// arr.push(6);
// console.log(arr)

// let obj = {
//     name:"sumit",
//     age:18,
//     category:'gen'
// }

// obj.name = "hello";
// obj.city = "delhi";
// console.log(obj)

// let obj = {
//     name:"sumit",
//     age:18,
//     category:'gen'
// }

// let obj2 = obj;
// obj2.name = "hello";
// obj2.city = "delhi";
// console.log(obj);