// // // const btn = document.querySelector('.btn');
// // // let timerId;

// // // btn.addEventListener('click', () => {
// // //     // const timerId = setTimeout(logger, 2000);
// // //     // const timerId = setTimeout(logger, 2000);
// // //     const timerId = setInterval(logger, 2000);
// // // });

// // // function logger () {
// // //     console.log('text');
// // // }
let a = 0;
const foo3 = () => {
  return (a = a + 1);
};

console.log(foo3());
console.log(foo3());
console.log(foo3());

// const hi = "Hello";

// const foo = (cb) => {
//   let a = "";
//   for (var i = hi.length - 1; i >= 0; i--) {
//     a = hi[i] + a;
//     setTimeout(() => {
//       console.log(a);
//     });
//   }
//   cb();
//   return a;
// };
// foo(() => {
//   console.log("hi");
// });
// // // console.log(hi[3]);

// // Number;
// // string; // объединять
// // BigInt;
// // Symbol;
// // undefined;
// // Boolean;
// // null;

// // Object;

const proverkaValue = "Ivan" + 40;

console.log(proverkaValue);

// // NaN // это ошибка вычислений, а typeof number

// // let a = 0.01 * 100;
// // let b = a + a + a + a + a + a + a + a + a + a;
// // console.log(b / 100);

// var a = 10;
// function foo() {
//   console.log(a);
//   var a = 1;
// }
// foo();

// // {
// //   let b = 3;
// // }
// // for (let i of b) {
// //   let c = 2;
// // }
// // if(){

// // }
// console.log(a);

// const a = {}; // мы кладём в "а" путь к объекту
// console.log(a);
// a.name = "Max";
// console.log(a);

// const b = "str";

// b = "str2";

// foo();

// function foo() {} // это функция, которую мы вызываем в основном потоке

// const a = function () {}; // это функция, которую мы куда-то присваиваем/кладём

// const a = (a, b) => {
//   return a + b;
// };
// let a = new String(123);

// console.log(a);

// let person = {
//   name: "Max",
//   age: 20,
//   hello() {
//     console.log(10);
//   },
// };
// person.hello();

// while (a === 5) {}

// do {} while (false);

// const max = [1, 2, 3];

// for (var i of max) {
//   console.log(i);
// }

// for (let i in max) {
//   console.log(i);
// }

// const a = [6, 2, 8, 1, 3, 4];

// let min = a[0];
// let max = a[0];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }

// console.log(max);
// console.log(min);

// let firstObj = { name: "hello" };
// let secondObj = firstObj;
// firstObj = { name: "Bye" };

// console.log(firstObj.name);

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// let ar = 5
// function foo () {
//   console.log(ar)
// }
// foo()

function multiply(a, b) {
  return a * b;
}
