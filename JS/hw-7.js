// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let numbers = [5, 7, 9];
numbers[1] = 10;

console.log("1.", numbers);

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let strings = ["перший", "другий", "третій"];
strings.push("четвертий");

console.log("2.", strings);

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
const num = [5, 10, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += num[i];
}

console.log("3.", sum);

// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numeric = [3, 7, 12, 18, 25];

for (let i = 0; i < numeric.length; i += 1) {
  console.log("4.", numeric[i]);
}

// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// Створюємо масив із 5-ти рядків
const lines = ["яблуко", "груша", "ананас", "виноград", "ківі"];

for (let i = 0; i < lines.length; i += 1) {
  if (lines[i].length > 5) {
    console.log("5.", lines[i]);
  }
}

// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numberString = [12, 45, 7, 89, 34, 23, 98, 56, 14, 67];
let max = numberString[0];

for (let i = 0; i < numberString.length; i += 1) {
  if (numberString[i] > max) {
    max = numberString[i];
  }
}

console.log("6. Максимальне число:", max);

// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const evenNumbers = [12, 45, 7, 24, 34, 23, 98, 56, 13, 20];

for (let i = 0; i < evenNumbers.length; i += 1) {
  if (evenNumbers[i] % 2 === 0) {
    console.log("7.", evenNumbers[i]);
  }
}
