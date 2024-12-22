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
