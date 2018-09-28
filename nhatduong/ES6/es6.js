//CTRL K C CTRL K U
//feature

/*
1. Arrow Function
        Thay function bang =>
         -> Giup ngan ngon
         -> Tranh bi bind nham
2. let var
         ->
         ->
3. Syntax class và object
         -> nang cap class thay vi dung prototype
         -> 
4. Default parameter, destructuring, spread operator
        -> truyen gia tri default vào hàm
        -> gan bien nhanh chong hơn
        -> co the truyen mang ... và argrument.
5. Template String
        -> `${}` dung truyen gia tri thuan loi hon
6. Map & set
        -> Map la gom key-data
        -> set la 1 mang giup phan tu khong bi trung
7. Promise
        ->
8. Iterator
        -> For of
9. Khac
        -apply =>nhan vao arr
        -call => nhan vao cac phan tu don le
        -const
        -import / export= > modules : vi du ben react
*/ 



//1.  OLDDDDDDDDDDDDDDDD

// Lỗi undefined this.
//----------------------------------------------------------------------//
// var person = {
//         firstName: 'Nhat',
//         lastName : 'Duong',
//         friends : ['ABC', 'XYZ'],
//         showFriend: function() {
//           this.friends.forEach(function(fr) {         
//             // this nhận là windown
//            // console.log(this);
//             //show bị undefined
//             console.log(this.firstName + ' have a friend named ' + fr);
//           });
                 
//         }
//       };
// person.showFriend();
//----------------------------------------------------------------------//
// //Sua theo cach cũ
//----------------------------------------------------------------------//
// var person = {
//         firstName: 'Nhat',
//         lastName : 'Duong',
//         friends : ['ABC', 'XYZ'],
//         showFriend: function() {
//                 var thisPerson = this;
//           this.friends.forEach(function(fr) {         
//             // this nhận là windown
//             //console.log(thisPerson);
//             //show bị undefined
//             console.log(thisPerson.firstName + ' have a friend named ' + fr);
//           });
                 
//         }
//       };
// person.showFriend();
//----------------------------------------------------------------------//
// //1.NEWWWWWWWWWWWWWW
// //Dung arrow để khắc phục
//----------------------------------------------------------------------//
// var person = {
//         firstName: 'Nhat',
//         lastName : 'Duong',
//         friends : ['ABC', 'XYZ'],
//         showFriend : function(){
//                 this.friends.forEach(fr => console.log(this.firstName + ' have a friend named ' + fr));
//         }
//       };

// person.showFriend();
//----------------------------------------------------------------------//







// //2. Let : Tham bien
//----------------------------------------------------------------------//

// for(let i = 0 ; i < 5;i++){
//         setTimeout(function(){ 
//                 console.log('Yo! ', i);
//              }, 1000);
//  }
 
// //2.Var : Tham chieu

// for(var i = 0 ; i < 5;i++){
//         setTimeout(function(){ 
//                 console.log('Yo! ', i);
//              }, 1000);
//  }

 //----------------------------------------------------------------------//
 




//3.  OLDDDDDDDDDDDDDDDD

//3.1 Class

//----------------------------------------------------------------------//

// function Animal()
// {
//         this.speak =  'speakkk';
//         this.talk  = function(){
//                 return this.speak;
//         }
// }

// function Dog()
// {
//         this.speak = 'bark';
// }

// animal = new Animal();
// console.log(animal.talk());
// Dog.prototype = new Animal();
// var dog = new Dog();
// console.log(dog.talk());

//----------------------------------------------------------------------//

//3.2 Object

//----------------------------------------------------------------------//
// var firstName = "Nhat";
// var lastName = "Duong";
// var person = {
//         firstName : firstName,
//         lastName : lastName,
//         showName : function(){
//                 console.log(this.lastName +' ' + this.firstName + ' old object');
//         }
// }
// person.showName();
//----------------------------------------------------------------------//

// //3.NEWWWWWWWWWWWWWW

// //3.1 Class
//----------------------------------------------------------------------//

// class Animal
// {
//         constructor(name){
//                 this.name = name;
//         }
//         speak(){
//                         console.log(this.name + ' speak');
//         }
// }
//  class Dog extends Animal
//  {
//          constructor(name , color)
//          {
//                  super(name);
//                  this.color = color;
//          }
//          speak()
//          {
                
//                  console.log(this.name + ' barks & color : ' + this.color);
//          }
//  }

//  animal = new Animal("meo");
//  //animal.speak();

//  dog = new Dog('dog','pink');
//  dog.speak();

//----------------------------------------------------------------------//


 //3.2 Object
//----------------------------------------------------------------------//

// var firstName = "Nhat";
// var lastName = "Duong";
// var person = {
//         firstName,
//         lastName,
//         showName :()=>console.log(this.lastName +' ' + this.firstName+ ' + new object')       
// }
// person.showName();

//----------------------------------------------------------------------//


//----------------------------------------------------------------------//





//Default parameter, destructuring, spread operator
//4.  OLDDDDDDDDDDDDDDDD
//----------------------------------------------------------------------//
//4.1

//4.2

// var person = {
//         firstName : 'Nhat',
//         lastName :'Duong',
// };
// var firstName = person.firstName;
// var lastName = person.lastName;

// console.log(firstName + ' ' + lastName );

//4.3



//----------------------------------------------------------------------//

//4.NEWWWWWWWWWWWWWW
//----------------------------------------------------------------------//

//4.1
// var add =  function(a =1 ,b =2){
//         return a + b;
// }
// console.log(add());
//4.2

// var person = {
//         firstName : 'Nhat',
//         lastName :'Duong',
// };
// var {firstName , lastName } = person;
// console.log(firstName  + ' ' + lastName );
//4.3

// var arr = [5,4,3,2,1];
// var fnc = function(x,y,...arr1)
// {
// console.log(x);
// console.log(y);
// console.log(...arr1);
// }
// fnc(...arr);
//----------------------------------------------------------------------//





//Template String
//5.  OLDDDDDDDDDDDDDDDD
//----------------------------------------------------------------------//

// var fname ='Nhat';
// var lname = 'Duong';
// console.log(fname + '- '+lname);
//----------------------------------------------------------------------//
//5.NEWWWWWWWWWWWWWW
//----------------------------------------------------------------------//
// var fname ='Nhat';
// var lname = 'Duong';
// console.log(`${fname} - ${lname}`);
//----------------------------------------------------------------------//





//Map & set

//6.NEWWWWWWWWWWWWWW
//----------------------------------------------------------------------//

//map

// var m = new Map();
// m.set('key1','valuess');
// m.set('key2',2)
// console.log(m.get('key1'));

//set

// var s = new Set();

// s.add(1);
// s.add(2);
// s.add(3);
// s.add(1);
// s.add(2);

// for(var s1 of s)
// {
//         console.log(s1); 
// }

//----------------------------------------------------------------------//




//Promise

//thuc hien trong bat dong bo
//Pending – trang thái khởi tạo.
//Fulfilled – trạng thái hoàn thành
//Rejected – trạng thái bị từ chối.


//7.NEWWWWWWWWWWWWWW
//----------------------------------------------------------------------//

// function tien_luong(){
//         return new Promise(function(resolve,reject){

//                 var rnd = 1;
//                 if(rnd)
//                 {
//                         var tien = 3000;
//                         return resolve(tien);
//                 }
//                 var reason = 'chua nhan duoc tien';
//                 reject(reason);
//         });
// }

// function tien_nhan_duoc(tien){
//         console.log('Tien luong nhan duoc: '+ tien);
// return new Promise((resolve,reject)=>{
//         var tiennhanduoc = tien;
//         return resolve(tiennhanduoc);
// });
// }



// function xai_tien_luong(tien){
//         console.log('Tien con lai sau khi xai: '+ tien);
//         return new Promise((resolve,reject)=>{
//                 var tienconlai = tien -1000;
//                 return resolve(tienconlai);
//         });
// }
// function tien_con_lai(tien){
//         console.log('Tien con lai: '+tien);
// }

// tien_luong()
// .then(function(tien){
//         return tien_nhan_duoc(tien);
// })
// .then(function(tiennhanduoc)
// {
//         return xai_tien_luong(tiennhanduoc);
// })
// .then(function(tienconlai){
//         return tien_con_lai(tienconlai);
// })
// .catch(function(reason){
//         console.log(reason);
// })

//----------------------------------------------------------------------//





//Iterator
//8. OLDDDDDDDDDDDDDDDD
//----------------------------------------------------------------------//

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(var i = 0; i< numbers.length; i ++)
// {
//   console.log(numbers[i]);
// }

//----------------------------------------------------------------------//
//8.NEWWWWWWWWWWWWWW
//----------------------------------------------------------------------//

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var number of numbers) console.log(number);

//----------------------------------------------------------------------//

//9. call & apply
// var a = Math.max(4, 3, 2, 10);

// // Thay vì gọi trực tiếp hàm Math.max, ta có thể dùng call
// // Set this bằng null
// var a1 = Math.max.call(null, 4, 3, 2, 10);
// console.log(a1);

// // Apply tương tự call, nhưng không truyền lần lượt
// // Mà truyền một array chứa toàn bộ các tham số
// var a2 = Math.max.apply(null, [4, 3, 2, 10]);console.log(a2);