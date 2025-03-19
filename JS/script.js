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

// 1
// 1.перетвори масив у рядок, без роздільників,
// 2.поверни кількість символів в отриманому рядку.

// ["Mango", "hurries", "to", "the", "train"] повертає 22
// ["M", "a", "n", "g", "o"] повертає 5
// ["top", "picks", "for", "you"] повертає 14

// const array = ["Mango", "hurries", "to", "the", "train"];
// const convertedArray = array.join("");
// console.log(convertedArray);

// const length = convertedArray.length
// console.log(length);

// const storage = ["apple", "plum", "pear"];
// const item = "peAr";

// const convertedItem = item.toLowerCase();
// console.log(convertedItem);

// const isIncluded = storage.includes(convertedItem);
// console.log(isIncluded);
// let answer;

// if (isIncluded) {
//     console.log(`${item} is available to order!`);
//     answer = `${item} is available to order!`
// } else {
//     console.log("Sorry! We are out of stock!");
//     answer = "Sorry! We are out of stock!"
// }
// практика шарити екран
//  4
// Створити масив із п'яти чисел. Використовуючи метод indexOf(),
// знайти індекс елемента зі значенням 3.

// /  4
// Створити масив із п'яти чисел. Використовуючи метод indexOf(),
// знайти індекс елемента зі значенням 3.

// const numbers = [0, 1, "jkljl;kjkl", 3, 4];

// console.log(numbers.indexOf(3));

// 5
// Створити масив із п'яти стрічок. Використовуючи метод join(),
//  створити одну стрічку, яка буде містити всі елементи масиву,
//  розділені комою.

// const strings = ["q", "w", "e", "r", "t"];

// console.log(strings.join(","));

//                                                      lesson 8
// 1

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код таким чином, щоб повертати масив усіх цілих чисел
//  від значення min до max включно.

// (1, 3) повертає [1, 2, 3]
// (14, 17) повертає [14, 15, 16, 17]
// В циклі for використовуй метод push

// const min = 10;
// const max = 15;

// let array = [];

// for(let i = min; i <= max; i += 1) {
//     console.log(i);
//     array.push(i)
// }

// console.log(array);
// 2

// Знайти спільні елементи.
// Спільними елементами  - які присутні у всіх масивах.
// Наприклад,
// у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,

// 1. створи змінні array1 та array2
// 2. Створи порожній масив для зберігання нового масиву.
// 3. Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2
// за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// [1, 2,
// const array1 = [24, 12, 27, 3];
// const array2 = [12, 8, 3, 36, 27];

// const newArray = [];

// for( let i = 0; i < array1.length; i += 1) {
//     // console.log(array1[i]);
//     // console.log(array2.includes(array1[i]));
//     if (array2.includes(array1[i])) {
//         newArray.push(array1[i])
//     }
// }

// console.log(newArray);

// 3
// Створити масив із п'яти чисел. Використовуючи метод push(),
//  додати до масиву ще один елемент.

// const numbers = [0, 1, 2, 3, 4];

// numbers.push(5);

// // console.log(numbers.push(5));
// console.log(numbers);

// 4
// Створити масив із трьох стрічок. Використовуючи метод pop(),
// видалити з масиву останній елемент.
// const strings = ["string1", "strin2", "strin3"];

// strings.pop();

// console.log(strings);

// Доповни код таким чином,
// щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// // console.log(firstTwoEls);
// // console.log(nonExtremeEls);
// // console.log(lastThreeEls);

// const array = ["Mango", "Poly", "Ajax"];
// const value = "Poly";
// let arr = [];

// const index = array.indexOf(value);

// // console.log(arr);

// if (index !== -1) {
//   arr = array.slice(0, index + 1);
// }

// 4
// Створити масив із десяти чисел. Використовуючи метод slice(),
//  створити новий масив, який буде містити перші п'ять елементів.
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const array = arr.slice(0, 6);

// console.log(array);

//                                                          lesson 9
// Перетворити масив:
// const arrayOriginal = ["мango-10", "Kiwi-2", "Monkong-2", "Singu-2", "Mango-1", "Ajax-1", "Poly-1", "singu-20"];

// на масив arrayNew:
//todo: ["Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2"];

// не змінюючи значення елементів та використовуючи методи:
// push(), pop(), unshift(), shift(),
// slice(), splice(), concat() за власним бажанням!

// let arrayNew = [];

// //! Код виконаного завдання

// console.log("arrayOriginal:", arrayOriginal);
// console.log("arrayNe
// console.log("arrayNew:", arrayNew);

//                                                                .

// 1.
// Створити функцію hello1(),
// яка при визові буде вертати текст “Привіт JavaScript”.
// const hello = function () {
//   return "Hi JavaScript";
// };
// hello();
// console.log(hello());

// 2.
// Напишіть функцію hello2(),
//  яка при виклику буде приймати змінну name (наприклад, «Василь»)
//  і виводити рядок (в нашому випадку «Привіт, Василь»).
// const hello = function (name) {
//   return `Hi ${name}`;
// };

// hello();

// console.log(hello("Vasil"));

// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів.
//  Перевірте її роботу.
// const mul = function (n, m) {
//   const multiply = n * m;
//   const sum = n + m;
//   const difference = n - m;

//   return [multiply, sum, difference];
// };

// const result = mul(10, 5);
// console.log(result);

// 1
// Напиши функцію logItems(items) для перебору і логування масиву
// const logItems = function (items) {
//   console.log(items);

//   for (const item of items) {
//     console.log(item);
//   }
// };
//перевірь роботу функції викликами нижче
// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);

// 2
// Напиши фунцію що приймає масив і рахує суму всіх чисел

// const calculateTotal = function (arr) {
//   //змінна для зберігання результату
//   let result = 0;
//   // за доп for перебираємо масив та рахуємо тотал
//   for (const num of arr) {
//     console.log(num);
//     result += num;
//   }
//   // повертаємо результат роботи ф-ції
//   return result;
// };

// const result1 = calculateTotal([2, 4, 6, 8]);
// console.log(result1);

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

// const calculateTax = function (amount, taxRate = 0.2) {
//   const tax = amount * taxRate;
//   console.log(tax);
//   return tax;
// };

// calculateTax(100, 0.1);

// calculateTax(200, 0.1);

// calculateTax(100);

// const checkStorage = function (products, item) {
//   const isIncluded = products.includes(item.toLowerCase());
//   console.log(isIncluded);
//   // let mes;
//   // if (isIncluded) {
//   //   mes = `${item} is available to order!`;
//   // } else {
//   //   "Sorry! We are out of stock!";
//   // }
//   // return mes;
//   if (isIncluded) {
//     return `${item} is available to order!`;
//   }
//   return "Sorry! We are out of stock!";
// };

// const res = checkStorage(["apple", "plum", "pear"], "pLuM");
// console.log(res);

// const filterNumbers = function (array, ...args) {
//   let elements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       elements.push(element);
//       console.log(element);
//     }
//   }

//   return elements;
// };
// // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// /*   1.
// Напишіть функцію, яка приймає на вхід масив чисел
// і повертає новий масив, в якому кожний елемент є
// квадратом відповідного елементу вхідного масиву.
// Знайдіть суму елементів масиву
// з використанням колбек-функції */
// // const arr = [1, 2, 3, 4, 5];
// // const squareArray = function (arr) {
// //   const array = [];
// //   for (const number of arr) {
// //     array.push(number ** 2);
// //   }
// //   return array;
// // };

// // const sumArray = function (arr, callback) {
// //   const newArray = callback(arr);
// //   console.log(newArray);
// //   let sum = 0;

// //   for (const num of newArray) {
// //     sum += num;
// //   }
// //   // console.log(sum);
// //   return sum;
// // };

// // const result = sumArray(arr, squareArray);
// // console.log(result);
// // const addArray = (arr) {

// // };
// // const result2 = sumArray(array, addArray)

// //                                                       СТРІЛКОВІ Ф-ЇЇ
// // Створити стрілкову функцію helloW(),
// // яка при визові буде вертати текст “Привіт JavaScript”.
// // const helloW = () => {
// //   return "Hello JavaSCript!";
// // };
// // console.log(helloW());

// const helloW = () => "Hello JavaSCript!";
// // console.log(helloW());

// /*   2.
// Напишіть стрілкову функцію hello2(),
// яка при виклику буде приймати змінну userName
// (наприклад, «Василь») і виводити рядок
// (в нашому випадку «Привіт, Василь»). */
// const helloN = (username) => `Привіт ${username}`;
// // console.log(helloN("Vasil!"));

// /*   3.
// Напишіть стрілкову функцію mul(n, m),
// яка приймає два аргументи і
// повертає добуток, суму і різницю цих аргументів.
// Перевірте її роботу. */
// // const mul = (n, m) => {
// //   const multiply = n * m;
// //   const total = n + m;
// //   const difference = n - m;
// //   return [multiply, total, difference];
// // };
// // console.log(mul(6, 6));
// // const mul = (n, m) => [n * m, n + m, n - m];
// // console.log(mul(6, 6));

// /*   4.
// Напиши стрілкову функцію myAverageScore ,
// яка у якості аргументу отримує масив з оцінками,
// і виводить користувачу його середній результат
// у наступному форматі:

// Averagescore: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:*/
// // console.log(myAverageScore([100, 75, 81, 96]));
// // console.log(myAverageScore([45, 63, 85, 70]));
// // const myAverageScore = (array) => {
// //   let sum = 0;
// //   for (const num of array) {
// //     sum += num;
// //   }
// //   console.log(sum);

// //   const average = sum / array.length;
// //   console.log(average);

// //   if (average > 90 && average <= 100) {
// //     return "Avaragescore: А";
// //   }
// //   if (average > 80 && average <= 90) {
// //     return "Avaragescore: B";
// //   }
// //   if (average > 70 && average <= 80) {
// //     return "Avaragescore: C";
// //   }
// //   if (average <= 70 && average >= 0) {
// //     return "Avaragescore: D";
// //   }
// //   return "Incorrect";
// // };

// // console.log(myAverageScore([100, 75, 81, 96]));
// // console.log(myAverageScore([45, 63, 85, 70]));

// // *   5.
// // Напишіть функцію, яка повертає новий масив,
// // в якому всі елементи масиву помножені на задане число,
// //  з використанням колбек-функції */
// // const array = [1, 2, 3, 4, 5];
// // const multiplyArray = (array, num, callback) => {
// //   let newArray = [];
// //   for (const element of array) {
// //     let result = callback(num, element);
// //     newArray.push(result);
// //   }
// //   return newArray;
// // };
// // const mull = (num, element) => num * element;
// // console.log(multiplyArray(array, 2, mull));

// // console.log(multiplyArray(array, 2, (num, element) => num + element));

// // console.log(multiplyArray(array, 2, (num, element) => element / num));

// // const myObject = {
// //   neme: "Artem",
// //   age: "15",
// //   city: "Lviv",
// //   occupation: "student",
// // };
// // console.log(myObject);

// // let name = "Resort Hotel";
// // let stars = 5;

// // const es6hotel = {
// //   stars,
// //   hotelName: name,
// //   capacity: 100,
// // };
// // // console.log(es6hotel);

// // // 1.
// // //  Оголоси змінну apartment і задай ій об'єкт,
// // // який описує квартиру з наступними характеристиками:

// // // descr - рядок, що містить опис,
// // // значення "Spacious apartment in the city center";
// // // rating - число, що містить рейтинг, значення 4;
// // // price - число, що містить ціну, значення 2153;
// // // tags - масив рядків, що містить метаінформацію,
// // //  значення ["premium", "promoted", "top"].
// // // name - рядок, що містить ім'я власника, значення "Henry";
// // // phone - рядок, що містить номер телефону, значення "982-126-1588";
// // // email - рядок, що містить пошту, значення "henry.carter@aptmail.com"
// // const phoneNum = "000-000-001";
// // const email = "henry.carter@aptmail.com";
// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// //   tags: ["premium", "promoted", "top"],

// //   owner: {
// //     name: "Chuck",
// //     username: "Norris",
// //     phoneNum,
// //     email,
// //   },
// //   showPrice() {
// //     return this.price;
// //   },
// //   changePrice(newPrice) {
// //     this.price = newPrice;
// //     return `Ціну змінено на ${this.price}`;
// //   },
// //   isRatingGood() {
// //     if (this.rating > 8) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   },
// // };
// // console.log(apartment.changePrice(2000));
// // console.log(apartment.showPrice());
// // console.log(apartment.isRatingGood());

// // apartment.price = 5000;
// // apartment.tags.push["trasted"];

// // console.log(apartment);
// // console.log(apartment.descr);
// // console.log(apartment.rating);
// // console.log(apartment.price);
// // console.log(apartment.tags[1]);
// // console.log(apartment.owner.name);
// // console.log(apartment.owner.email);
// // console.log(apartment.tags.length);

// // const apartmentTagsLength = apartment.tags.length;
// // console.log(apartment.tags[apartmentTagsLength[length[-1]]]);
// // console.log(apartmentTagsLength);
// // const keys = Object.keys(apartment);
// // console.log(keys);
// // const valuess = Object.values(apartment);
// // console.log(valuess);

// // // const myObject = {
// // //   neme: "Artem",
// // //   age: "15",
// // //   city: "Lviv",
// // //   occupation: "student",
// // //   increaseAge(age) {
// // //     console.log(this);
// // //     this.age = age;
// // //   },
// // //   changeOccupation(position) {
// // //     this.occupation = position;
// // //   },
// // // };
// // // myObject.increaseAge(32);
// // // myObject.changeOccupation("teacher");
// // // console.log(myObject);

// // // Дано масив об’єктів
// // const friends = [
// //   { name: "Mango", online: false },
// //   { name: "Kiwi", online: true },
// //   { name: "Poly", online: false },
// //   { name: "Ajax", online: true },
// // ];
// // // Написати функцію яка буде повертати масив всіх імен друзів

// // const getAllNames = function (friends) {
// //   const names = [];

// //   for (const friend of friends) {
// //     // console.log(friend.name);
// //     names.push(friend.name);
// //   }
// //   return names;
// // };
// // console.log(getAllNames(friends));
// // // Написати функ, яка буде повертати масив імен друзів які онлайн

// // const getOnlineFriends = (friends) => {
// //   const onlineFriends = [];

// //   for (const friend of friends) {
// //     if (friend.online) {
// //       console.log(friend.online);
// //       onlineFriends.push(friend);
// //     }
// //   }
// //   return onlineFriends;
// // };
// // console.log(getOnlineFriends(friends));

// // 1
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// // console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// // 2
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// // console.log(allScores);

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// // console.log(bestScore, worstScore);

// // Задачка поєднати об,єкти
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };
// // console.log(finalSettings);

// // 1.
// // Скопіювати масив викор розпорошення
// const numberss = [1, 2, 3, 54, 12];
// // 2.
// // Скопіювати обєкт викор розпорошення
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const newNumbers = [...numberss];
// // console.log(newNumbers);
// const newApartment = { ...apartment };
// // console.log(newApartment);

// // 3.
// // Функція getExtremeScores(scores)
// // приймає масив оцінок (чисел) у параметрі scores.
// // вона повертала об'єкт із двома властивостями:
// // Властивість best має містити найбільше число з масиву scores
// // Властивість worst має містити найменше число з масиву scores.
// // Використовуй оператор (...spread) і методи Math.max() і Math.min().

// const getExtremeScores = function (scores) {
//   const bestExtremeScores = Math.max(...scores);
//   const worstExtremeScores = Math.min(...scores);

//   const scoresObject = { best: bestExtremeScores, worst: worstExtremeScores };

//   console.log(bestExtremeScores, worstExtremeScores, scoresObject);

//   return scoresObject;
// };

// // getExtremeScores([89, 64, 42, 17, 93, 51, 26]); //{ best: 93, worst: 17 }
// // getExtremeScores([19, 7, 4, 17, 81, 24]); //{ best: 81, worst: 4 }

// // Об’єкт movie
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };
// const {
//   title,
//   director: { name, nationality },
//   actors: [actorRobbins, actorFreeman],
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;
// // console.log(actorRobbins, actorFreeman);

// // Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };

// // const {
// //   count,
// //   list: [bookGatsby, bookMockingbird, book1984],
// // } = books;
// // console.log(bookGatsby, bookMockingbird, book1984);
// // console.log(bookGatsby.author);
// // console.log(bookGatsby.title);
// // console.log(bookGatsby.year);
// const {
//   count,
//   list: [bookGatsby, bookMockingbird, book1984],
// } = books;

// // console.log(book1984);

// const { title: bookTitle, author, year: bookYear } = book1984;

// // console.log(bookTitle);
// // console.log(author);
// // console.log(bookYear);

// // ДЗ
// // Напиши сценарій керування особистим кабінетом інтернет-банку.
// // Є об'єкт account в якому необхідно реалізувати методи
// // для роботи з балансом та історією транзакцій.
// /*
//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
// /*
//  * Кожна транзакція - це об'єкт з властивостями:
// id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // Історія транзакцій
//   transactions: [],
//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//       id: this.transactions.length,
//       type: type,
//       amount: amount,
//     };
//     return transaction;
//   },
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactions.push(newTransaction);
//   },
//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     if (amount > this.balance) {
//       return "Зняття такої суми неможливе! Недостатньо коштів";
//     }
//     this.balance -= amount;
//     this.transactions.push(newTransaction);
//   },
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },
//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Not found!";
//   },
//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };

// console.log(account.getBalance());
// // account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// // account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());

// console.log("Transaction 1: ");
// console.log(account.getTransactionDetails(1));
// console.log("Transaction 3: ");
// console.log(account.getTransactionDetails(3));
// console.log("Transaction 4: ");
// console.log(account.getTransactionDetails(4));
// console.log(account.transactions);

// // console.log('Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW));
// // console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
// //                                                          arrays methods
// // 1.
// const calculateTotal = function (items) {
//   let total = 0;

//   items.forEach((item) => (total += item));
//   return total;
// };
// console.log(calculateTotal([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotal([164, 48, 291])); //повертає 503

// // 2.
// // Доповни Функцію filterArr(numbers, value)
// // приймає  масив чисел numbers і value
// // має поверти новий масив, з елементами оригінального масиву,
// // які більші за значення числа value.
// // або повертає порожній масив.

// const filterArr = function (numbers, value) {
//   let filteredArr = [];

//   numbers.forEach((item) => {
//     if (item > value) {
//       filteredArr.push(item);
//     }
//   });

//   return filteredArr;
// };
// console.log(filterArr([1, 2, 3, 4, 5], 4)); //повертає [5]
// console.log(filterArr([1, 2, 3, 4, 5], 5)); //повертає []
// console.log(filterArr([12, 24, 8, 41, 76], 38)); // повертає[(41, 76)];

// // 3. Зроби новий масив планет у аперкейс
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// // 4. Збережи у змінній planetsLengths масив,
// // що буде складатися з довжин назв кожної планети
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// // 5.
// // const players = [
// //   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// //   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// //   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// //   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// //   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// // ];

// // const plyersNames = players.map((player) => player.name);
// // const newPlayerName = player.map(({ name }) => name);

// // Використовуючи 👆 масив об’єктів виконай наступні завдання:
// //map()
// // Отримати масив імен всіх гравців
// // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// // Збільшити кількість годин гравця по id. Переписати на тернарник
// //filter()
// // Отримати масив всіх гравців онлайн
// // Отримати масив всіх гравців офлайн
// // Отримати масив всіх хардкорних гравців з часом більше 250
// //Find()
// // Знайти гравця по id
// // Знайти гравця по імені
// //every()
// // Перевірити чи всі гравці
// //every()
// // Перевірити чи всі гравці мають час більше 200
// // Перевірити чи всі гравці онлайн

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// const sortedByName = players
//   .toSorted((a, b) => a.name.localeCompare(b.name))
//   .map((player) => player.name);
// // console.log(sortedByName);

// // const sortedByTimePlayed = players.toSorted(
// //   (a, b) => a.timePlayed - b.timePlayed
// // );
// // console.log(sortedByTimePlayed);

// // const sortedByWorstPlayers = players.toSorted(
// //   (a, b) => b.timePlayed - a.timePlayed
// // );
// // console.log(sortedByWorstPlayers);

// const scores3 = [27, 2, 41, 4, 7, 3, 75];
// // console.log(scores3.toSorted((a, b) => a - b)); // [2, 27, 3, 4, 41, 7, 75]

// // Масив рядків сортується за алфавітом.
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// // console.log(students.toSorted());
// // console.log(students.toSorted((a, b) => a.localeCompare(b)));
// // Водночас порядковий номер великих літер менший, ніж у малих.
// const letters = ["b", "B", "a", "A", "c", "C"];
// // console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
// // console.log(letters.toSorted((a, b) => a.localeCompare(b)));

// // const totalTime = players.reduce((acc, player) => {
// //   const total = acc + player.timePlayed;
// //   return total;
// // }, 0);
// // console.log(totalTime);

// // const playersOnline = players.filter((player) => player.online);
// // console.log(playersOnline);

// // // Використовуючи 👆 масив об’єктів виконай наступні завдання:
// // //map()
// // // Отримати масив імен всіх гравців
// // // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// // // Збільшити кількість годин гравця по id. Переписати на тернарник
// // //filter()
// // // Отримати масив всіх гравців онлайн

// // // Отримати масив всіх гравців офлайн
// // const playersOffline = players.filter((player) => !player.online);
// // console.log(playersOffline);

// // // Отримати масив всіх хардкорних гравців з часом більше 250
// // const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// // console.log(hardcorePlayers);

// // //Find()
// // // Знайти гравця по id
// // const playerById = players.find((player) => player.id === "player-4");
// // console.log(playerById);

// // // Знайти гравця по імені
// // const playerByName = players.find((player) => player.name === "Mango");
// // console.log(playerByName);

// // //every()
// // // Перевірити чи всі гравці мають час більше 200
// // const isTimeGood = players.every((player) => player.timePlayed > 200);
// // console.log(isTimeGood);

// // Перевірити чи всі гравці онлайн

// // 2.  Порахувати загальну кількість товарів в кошику
// // const cart = [
// //   { label: "Apples", price: 100, quantity: 2 },
// //   { label: "Bananas", price: 120, quantity: 3 },
// //   { label: "Lemons", price: 70, quantity: 4 },
// // ];
// // const totalAmount = cart.reduce((acc, element) => {
// //   return acc + element.quantity;
// // }, 0);
// // console.log(totalAmount);
// // const totalPrice = cart.reduce((acc, element) => {
// //   return acc + element.price * element.quantity;
// // }, 0);
// // console.log(totalPrice);

// // // 3.  Знайдіть середнє значення чисел в масиві
// // const numbers4 = [1, 2, 3, 4, 5];
// // const totalNumber = numbers4.reduce((acc, number) => {
// //   return acc + number;
// // }, 0);
// // const average = totalNumber / numbers4.length;

// // console.log(totalNumber, average);

// //                                                                     ООП
// // 1
// // Створіть клас Person, що містить властивості
// // firstName та lastName.
// // Додайте метод getFullName(), який повертає
// // повне ім'я у форматі "firstName lastName".

// // class Person {
// //   constructor(firstName, lastName) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //   }

// //   getFullName() {
// //     return `${this.firstName} ${this.lastName}`;
// //   }
// // }

// // const person1 = new Person("John", "Doe");
// // console.log(person1.getFullName()); // John Doe

// // // 2
// // // Створіть клас Rectangle, що містить властивості
// // // width та height.
// // // Додайте метод getArea(), який повертає площу прямокутника.

// // class Rectangle {
// //   constructor(width, height) {
// //     this.height = height;
// //     this.width = width;
// //   }

// //   getArea() {
// //     return this.height * this.width;
// //   }
// // }
// // const rectangle1 = new Rectangle(10, 5);
// // console.log(rectangle1.getArea()); // 50
