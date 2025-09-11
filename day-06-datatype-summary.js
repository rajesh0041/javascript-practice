//premitive and non-premitive data type
// premitive ( call by value)
/* 
1.string
2.Number
3.boolean
4.null
5.undefined
6.symbol
7.big int  
*/
var a='34';
const id=Symbol('56w');
const id1=Symbol('56w');
console.log(id==id1)
const Big=823721965128924234n;
console.log(Big)
//non-premitive (call by reference )
/*
Array
objects
function
*/
const hero=["ran","shyam"]
const obj={
    ram:45,
    age:33
}
const func=function(){
    console.log("hello shera")
}
//java scripts -- dynamically typed language 


// typeof function is used to find the type of variable;
console.log(typeof func)
/* 
undefined= 'undefinded'
null='object'
Boolean= 'boolean'
Number = 'number'
string ='string'
object function= 'function'
symbol='symbol'
*/