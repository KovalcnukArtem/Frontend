// // 1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
// const result = 5 + 5 + "5";

// console.log(result);
// console.log(typeof result);

// // 2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ (за доп метода includes()  або indexOf()) та рахує загальну кількість символів. Результат виведіть в консоль.
// const email = "art.ig.kov@gmail.com";
// const checkEmail = email.includes("@");
// const positionOfSymbol = email.indexOf("@");

// console.log(checkEmail);
// console.log(positionOfSymbol);
// console.log(email.length);

// // 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
// const my = "My";
// const name = "name";
// const is = "is";
// const dot = ".";
// const userName = "Victor";
// let fullName = `${my} ${name} ${is}`;
// fullName = fullName + " " + userName;
// const fullName2 = my + name + is + dot;

// console.log(fullName);

// // 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
// const userrName = "Катерино.";
// const payment = 300;
// alert(`Дякую, ${userrName} До сплати ${payment} гривень`);

// // 5. Отримати  останній символ: const fruit = 'апельсин';
// const fruit = "апельсин";
// console.log(fruit[0]);
// console.log(fruit[fruit.length - 1]);

// // 6. Знайди індекс фрази "neiS" в рядку  "Jason Neis". Здійсни перевірку незалежно від регістру
// const str = "Jason Neis".toLowerCase();
// const searchString = "neiS";

// console.log(str.indexOf(searchString.toLowerCase()));
