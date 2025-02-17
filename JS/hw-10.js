/*1 - Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек.
    Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
   * Порахувати суму всіх елементів масиву.
   * Знайти мінімальний елемент масиву.
   * Знайти максимальний елемент масиву.
 !!! Перепишіть колбек-функції на стрілки */
const processArray = (array, callback) => callback(array);
const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

console.log(
  "1.",
  processArray([1, 2, 3], getSum),
  processArray([1, 2, 3], getMin),
  processArray([1, 2, 3], getMax)
);
// const processArray = (array, callback) => {
//   return callback(array);
// };
// const getSum = (arr) => {
//   return arr.reduce((acc, curr) => acc + curr);
// };
// const getMin = (arr) => {
//   return Math.min(...arr);
// };
// const getMax = (arr) => {
//   return Math.max(...arr);
// };
// console.log(
//   processArray([1, 2, 3], getSum),
//   processArray([1, 2, 3], getMin),
//   processArray([1, 2, 3], getMax)
// );

// /* 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними.
//       Використайте її для виконання наступних операцій:
//      *Додавання.
//      *Віднімання.
//      *Множення.
//      *Ділення.
//   !!!!Перепишіть колбеки на стрілкові функції */
const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Помилка: ділення на нуль");

console.log("2.", operate(10, 5, add));
console.log("  ", operate(10, 5, subtract));
console.log("  ", operate(10, 5, multiply));
console.log("  ", operate(10, 5, divide));
// const operate = (a, b, callback) => {};
// // Виклик функції з різними операціями
// console.log(
//   operate(10, 5, function (a, b) {
//     return a - b;
//   })
// ); // Віднімання
// console.log(
//   operate(10, 5, function (a, b) {
//     return a + b;
//   })
// ); // Додавання
// console.log(
//   operate(10, 5, function (a, b) {
//     return a * b;
//   })
// ); // Множення
// console.log(
//   operate(10, 5, function (a, b) {
//     return a / b;
//   })
// ); // Ділення

// *ДОДАТКОВО
// 4. з ЛМС - Напишіть функцію, яка приймає масив чисел і колбек-функцію.
//  Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив,
//  що містить результати застосування колбек-функції до кожного елементу. */
const applyCallbackToEachElement = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(callback(arr[i]));
  }
  return result;
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);

console.log("4.", result); // [1, 4, 9, 16, 25]
// const applyCallbackToEachElement = (arr, callback) => { }
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = ;
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]
