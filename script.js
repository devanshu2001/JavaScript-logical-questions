// //1
// function car(){
//     console.log(model);
//     console.log(color);

//     var model = 2015;
//     let color = red;
// }
//  car()


// 2
//  for(var i =0; i < 3;i++){
//     setTimeout(() => console.log(i),1);
//  }


// 3
//  for(let i =0;i < 3;i++){
//     setTimeout(() => console.log(i),1);
//  }


//4
// console.warn(+true);
// console.warn(typeof +true);


//5
// console.warn(!"dev");
// console.warn(typeof("dev"));


//6
// let data = "size";
// const bird ={
//     size: "small"
// };
// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);


//7
// let c ={ name:"peter"};
// let d;
// d=c;
// c.name="dev";
// console.log(d.name);


//8
// var x;
// var x =10;
// console.log(x);


//9
// var x;
// let x =10;
// console.log(x);


//10
// let a =3;
// let b = new Number(3);
// console.log(a==b);
// console.log(a===b);


//11
// let name;
// mane ={}    //typo!
// console.log(name);


//12
// function fruit() {
//     console.log("woof!");
// }
//   fruit.name ="apple";
//   fruit()


//13
// function sum(a,b) {
//     return a+b;
// }
// console.warn(sum(1,"2"));


//14
// let number=0;
// console.log(number++);
// console.log(++number);
// console.log(number);


//15
// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21)


//16
// function getAge(){
//     'use strict';
//     age =14;
//     console.log(age);
// }
// getAge()

//17
// const num = eval("10*10+5");
// console.log(num);


//18
//how long is top_secret is accesible?
// sessionStorage.setItem('top_secret',123);


//19
// const obj={1:'a',2:'b',3:'c',4:'d'};
// console.log(obj.hasOwnProperty(1));
// console.log(obj.hasOwnProperty('1'));


//20
// const obj ={a:'one',b:'two',a:'repeat'};
// console.log(obj);


//21
// for(let i =1;i<5;i++){
//     if(i===3) continue;
//     console.log(i);
// }


//22
// const foo = () => console.log('first');
// const bar = () => setTimeout(()=> console.log('second'));
// const buz = () => console.log('third');

// foo();
// bar();
// buz();


//23
// const person={name:'dev'};

// function sayHi(age) {
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21));


//24
// function sayHi(){
//     return (()=> 0)();
// }
// console.log(typeof sayHi());


//25 
// function sayHi(){
//     return () => 0;
// }
// console.log(typeof sayHi());


//26
//console.log(typeof typeof 1);


//27
// const number =[1,2,3];
// number[9]=11;
// console.log(number);


//28
// const number=[1,2,3];
// number[3]=number;
// console.log(number);


//30
// console.log(!!null);
// console.log(!!'');
//console.log(!!1);


//31 
// console.warn(setInterval(() =>console.log('hey'),1000));
// console.warn(setInterval(() =>console.log('hey'),1000));
// console.warn(setInterval(() =>console.log('hey'),1000));


//32
//console.log([...'devanshu']);


//33
//console.log(typeof 3+4+'5');


//34
//console.log(typeof(3+4+ +'5'));


//36
//console.log(typeof[]);


//37
//console.log([]==[]);


//38
// let data=[1,2,3].map(num=> {
//     if( typeof num==='number')return;
//     return n*2;
// });
// console.warn(data);


//39

// function getInfo(member) {
//     member.name='anil'
// }
// const person ={name:'sarah'};
// getInfo(person);
// console.log(person);


//40
// function car(){
//     this.make='tata';
//     return{make: 'kia'};
// } 
// const mycar= new car();
// console.log(mycar.make);


//41
// (()=>{
//     let x =(y=10);
// })();

// console.log(typeof x);


//42
// (()=>{
//     let x = y = 10;
// })();
// console.log(typeof y);


//43
// (()=>{
//     let x = 10;
// })();
// (()=>{
//     let x = 10;
// })();
// console.log(typeof x);


//44
// (()=>{
//     let x= y= 10;
// })();
// (()=>{
//     let x= y= 20;
// })();
// console.log(y);


//45
// let x =100;
// (()=>{
//     var x=10;
// })
// console.log(x);


//46
// console.log(!true-true);


//47
// console.log(true+ +'10');



 