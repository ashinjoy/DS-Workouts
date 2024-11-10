// var obj = {
//   name: "ashin",
//   hobbies: ["play", "eat", "sleep"],
//   address: "kottandan house",
// };

// obj.character = "good";

// // console.log(obj)
// delete obj.name; // delete the key from the object
// console.log(obj);
// // delete hello;

// const arr = [1, 2, 3, 4, 4];
// delete arr[0]; //deletes the value but arr doesnt resize itself it remains empty
// arr[0] = 1;
// console.log(arr);

//delete keyword is efficient if used correctly
//slower in the loops

// check if the property exists in object

// const obj3 ={
//     name:"ashin",
//     job:"scientist",
//     hobbies:["play","eat","code","sleep"]
// }

// const result = Object.keys(obj3).filter((el)=>el==="job")
// console.log('josb' in obj3);   // find a key exist in obj with  'in'
// const student = { name: 'Alice', age: 20, grade: 'A' };
// const arr = []
// for(const data in student){
//    arr.push({data:student[data]})
// }
// console.log(arr);

// const obj4 = { a: 1, b: 2, c: 3 };
// // const arr = [{a:1},{b:2},{c:3}]
// const arr = [];

// for (const data in obj4) {
//   console.log(data);
//   arr.push({ [data]: obj4[data] }); // key should be wrapped within [] so that the js engine will compute the data dynamiclly if not wrap it will conider as string
// }

// console.log(arr);

// const obj = { a: 1, b: 2, c: 3 };
// const arr = Object.entries(obj) // converts into arr of key value
// const arr2 = [[1,2],[2,3]]
// const obj1 = Object.fromEntries(arr2) // converts the [key,value] into obj 
// console.log(obj1);

// const obj = {name:"ashin"}
// console.log(Object.values(obj).length)
