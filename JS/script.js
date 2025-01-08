// console.log(12);

// const myName = "Artem";
// const age = 14;
// const myCIty = "Lviv";

// console.log(myName);
// console.log(age);
// console.log(myCIty);

// const product = "Cup";
// const productPrice = "2$";

// console.log(product, productPrice);

// const doneDistance = 50;
// const width = "120px";
// const notAdmin = true;
// const isAdmin = true;
// const isVip = true;
// const message = "Hello user!";

// alert(message);

// const fruit = "Hello fruit";

// alert(fruit);

// const quiz = true;

// const question = "Do you like sport?";

// confirm(question);

// const answer = confirm(question);
// console.log(answer);

// const userQuestion = "Ти хочеш продовжити підписку?";

// const should = confirm(userQuestion);
// console.log(should);

// const question = "Введіть свій вік";
// prompt(question);
// const userQuestion = prompt(question);
// console.log(userAge);

// if (userAge >= 16) {
//     alert("Ви дорослі")
// }

// if (userAge < 16) {
//   alert("Ви дитина");
// }

// скрипт для їх замовлення
// товар, ціна за одну штуку, ціна доставки, виводити суму замовлення
// message - у форматі "You ordered <назва товару> worth <total price> credits"
// const productName = "shredded chease";
// const productNumber = 5;
// const productPrice = 10;
// const totalPrice = productNumber * productPrice;
// console.log(totalPrice);

// const message = `You ordered ${productName} worth ${totalPrice} credits`;
// console.log(message);

// const actorName = "Tom Cruize";
// const actorLenght = actorName.length;
// console.log(actorLenght);

// const lastIndex = actorLenght - 1;
// console.log(lastIndex);

// const lastElement = actorName[lastIndex];
// console.log(lastElement);
// console.log(actorName[4]);
// console.log(actorName.toUpperCase());
// console.log(actorName.indexOf("Cruize"));
// console.log(actorName.indexOf(" "));

//? Спочатку зробити дві змінні:
//? ПЕРШУ - <myFavoriteGameName>
//? зі значенням = "Ім'я вашої улюбленої гри"
//? та ДРУГУ - <myFavoriteGameText> зі значенням = "my favorite game's name"

//? За доромогою властивості або метода рядка
//? отримати ОСТАННІЙ символ змінної <myFavoriteGameName>

//? та записати це значення у ТРЕТЮ змінну <lastCharacter>.
//? Зробити перетворення значення змінної <lastCharacter>
//? на ВЕЛИКУ(заглавну літеру).
//? Вивести в консоль повідомлення, використовуючи
//? значення ВСІХ ТРОЬХ змінних у такому форматі:
//? "The last letter in <myFavoriteGameText> <myFavoriteGameName> is <lastCharacter> !"
// Використовуйте шаблонний рядок

// const myFavoriteGameName = "Block blast";
// const myFavoriteGameText = "my favorite game's name";
// const lastCharacter = myFavoriteGameName[myFavoriteGameName.length - 1];

// console.log(
//   `The lst letter in ${myFavoriteGameText} ${myFavoriteGameName} is ${lastCharacter.toUpperCase()} !`
// );

// const message = "The last letter in" + myFavoriteGameText + myFavoriteGameName "is" + lastCharacter + "!";
// console.log(message)

// const sub = "vip";
// const canAccessContent = sub === "pro" || sub === "vip";

// console.log(canAccessContent);

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
// Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(canOpenChat);

// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log("до х1", number < 10);
// console.log("після х1", number > 10);
// console.log("від х1 до х2", number < x2 && number > x1);
// console.log("до х1 або після х2",  number < x1 || number > x2 );

// / Задача: зробити перевірку оцінки
// якщо оцінка вище 70 то вивести в консоль повідомлення "Satisfactorily",
// в іншому випадку "Unsatisfactorily"
// const grade1 = 60;

// if (grade1 > 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Задача в залежності від зарплати виводити в консоль повідомлення

// [1000-2000) "Рівень 1"
// [2000 - 3000) "Рівень 2"
// вище 3000"Рівень 3"
//  менше 1000 "Працюй більше!"

// const salary = 500;

// if (salary >= 1000 && salary < 2000) {
//   console.log("Рівень 1");
// } else if (salary >= 2000 && salary < 3000) {
//   console.log("Рівень 2");
// } else if (salary > 3000) {
//   console.log("Рівень 3");
// } else if (salary < 1000) {
//   console.log("Працюй більше!");
// } else {
//   console.log("Введіть заробітню плату!");
// }

// //1  Що буде в консолі
// if ("0") {
//   //  console.log( 'Привіт' );
//   }

// Використовуючи if..else, напишіть код, що отримує число
// і потім виводить повідомлення на екран:

// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.
// const userNumber = -3;

// if (userNumber > 0) {
//   console.log(1);
// } else if (userNumber < 0) {
//   console.log(-1);
// } else if (userNumber === 0) {
//   console.log(0);
// } else {
//   console.log("Enter a number");
// }

// Використовуючи конструкцію if..else, напишіть код, що запитує:
//  ‘Яка “офіційна” назва JavaScript?’
//   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
// const userInput = "jnoik";
// const userInput = "EcMAScriPt";

// if (userInput.toLowerCase === "EcMAScript".toLowerCase) {
//   console.log("Правильно!");
// } else {
//   console.log("Ви не знали, це EcMAScript");
// }

// Напиши скрипт обробки покупки в магазині.
//   - Баланс користувача зберігається в змінній balance
//   - Сумма покупки зберігається в змінній payment
//   - Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість
//   доступних коштів на рахунку»
//  - Якщо сума покупки не перевищує баланс:
//      - Відняти з балансу суму покупки
//    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
//  - Якщо сума покупки перевищує баланс:
//     - Вивести повідомлення
// «На рахунку недостатньо коштів для проведення операції!»
//  - В кінці вивести повідомлення «Операція завершена»
// let balance = 10000;
// const userPayment = 20000;
// console.log(
//   `Загальна вартість замовлення ${userPayment} кредитів. Перевіряємо кількість доступних коштів на рахунку`
// );
// if (userPayment <= balance) {
//   // balance = balance - userPayment;
//   balance -= userPayment;
//   console.log(`На рахунку залишилося ${balance} кредитів`);
// } else {
//   console.log("На рахунку недостатньо коштів для проведення операції!");
// }
// console.log("Операція завершена");

// const browser = "Firefox";
// let text;

// // if(browser == 'Edge') {
// //   text = "You've got the Edge!";
// // } else if (browser == 'Chrome'
// //  || browser == 'Firefox'
// //  || browser == 'Safari'
// //  || browser == 'Opera') {
// //   text = 'Ми підтримуємо і ці браузери' ;
// // } else {
// //   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// // }

// switch (browser) {
//   case "Edge":
//     text = "You've got the Edge!";
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     text = "Ми підтримуємо і ці браузери";
//     break;
//   default:
//     text = "Маємо надію, що ця сторінка виглядає добре!";
//     // }
//     // console.log(text);

//     let a1 = 0;
//     let output;

// if (a1 === 0) {
//   output = 0;
// }
// if (a1 === 1) {
//   output = 1;
// }
// if (a1 === 2 || a1 === 3) {
//   output = "2,3";
// }

// switch (a1) {
//   case 0:
//     output = 0;
//     break;
//   case 1:
//     output = 1;
//     break;
//   case 2:
//   case 3:
//     output = "2,3";
//     break;
//   default:
//     console.log("Invalide");
// }

// console.log(output);

// Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'
// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такої кількості зірок немає");
// }
// console.log(price);

// Знайти суму всіх парних цілих чисел від одиниці до цього числа
// Парні числа — це ті, що можна поділити на 2 без остачі %
// if (index % 2 === 0)

// const number1 = 564;
// let number1Result = 0

// for (let i = 0; i <= number1; i += 1) {
//   console.log(i);

//   if (i % 2 === 0) {
//     console.log("Парне" , i);
//     number1Result += i;
//   }

// }

// console.log(number1Result);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }
// do {
//   statement // код, який буде виконуватися
// } while (condition);

// 1
// Вивести в консоль числа від 1 до 5 всіма циклами
// let num = 1;

// while (num <= 5) {
//   console.log(num);
//   num += 1;
// }

// do {
//   console.log(num);
//   num += 1;
// } while (num <= 5);

// for (let num = 1; num <= 5; num += 1) {
//   console.log(num);
// }

//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end,
// яке ділиться на 5 без остачі
// const start = 6;
// const end = 17;
// let w;

// for (let i = start; i <= end; i += 1) {
//   //   console.log(i);
//   //   console.log(i % 5 === 0);
//   if (i % 5 === 0) {
//     console.log("Знайшли число");
//     w = i;
//     break;
//   }
// }
// console.log(w);

// Виведіть в консоль всі непарні числа від 10 до 20
// за допомогою циклу for
// const start = 10;
// const end = 20;

// for (let i = start; i <= end; i += 1) {
//   //   console.log(i);
//   if (i % 2 === 0) {
//     // console.log("Знайшли парне");
//     continue;
//   }
//   console.log("Знайшли непарне", i);
// }

// Напиши скрипт який порахує суму всіх парних чисел,
// які входять в діапазон чисел в змінних від min до max.
// Наприклад, якщо min=0 и max=5
// const min = 0;
// const max = 5;
// let totalSum = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log("Знайшли парне", i);
//     totalSum += i;
//   }
// }

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 2 !== 0) {
//     console.log("Знайшли непарне", i);
//     continue;
//   }
//   totalSum += i;
// }
// console.log(totalSum);

// Напиши скрипт який підраховує загальну суму зп працівників.
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000.
// Записати суму в змінну totalSalary і вивести в на сторінку.

// // 1 змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 0; i <= employees; i += 1) {
//   // console.log(i);
//   const salary = Math.random() * (maxSalary - minSalary) + minSalary;

// console

// 1. Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ; і Arr2 зі значеннями: true,2, {}, ["a"], 222. Вивести в консоль 2-гий елемент (по індексу) кожного з масивів довжину масиву.
// const arr1 = [1, 5, "4", "hello"];
// const arr2 = [true, 2, {}, ["a"], 222];

// console.log(arr1[1], arr2[1], arr1.length, arr2.length);

// 2.const Arr1 = [1, 5, "4", "hello"]; Через індекс елемента додати в кінець масиву Arr1  новий елемент зі значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.
// const arr1 = [1, 5, "4", "hello"];

// arr1[4] = 22;
// console.log(arr1);

// 2.
// Створіть масив рядків.
// const fruits = ["apple", "plum", "pear", "orange"];
// // Виведіть в консоль значення першого,
// // другого та останнього елементу.
// // Змініть значення останнього елементу на "peach"
// // а другого на "banana".

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);
// fruits[fruits.length - 1] = "peach";
// fruits[1] = "banana";
// console.log(fruits);

// for (let friend of myFriends) {
//   console.log(friend);
// }
// console.log(myFriends);
// for (let i = 0; i < myFriends.length; i += 1) {
//   console.log(i);
//   console.log(myFriends[i]);
//   myFriends[i] = "fgh"
// }

// // 1
// const array = [10, 25, 13, 44, 15];
// // Вивести в консоль всі елементи масиву за допомогою
// // циклів for та for…of.
// const arrayLength = array.length;

// for (let i = 0; i < arrayLength; i += 1) {
//   console.log(array[i]);
// }

// for (const arr of array) {
//   console.log(arr);
// console.log(`Додаємо до ${total} елемент масиву ${item}`);
// total += item;
// }

// 2
// Порахувати загальну суму покупок в корзині за допомогою
// циклів for та for…of.

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }
// console.log(total);

// for (const item of cart) {
//   console.log(item);
//   total += item;
// }
// console.log(total);

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "User not found!";

// for (const client of clients) {
//   console.log(client);
//   if (client === clientNameToFind) {
//     message = "User found!";
//     break;
//   }
// }
// console.log(message);
