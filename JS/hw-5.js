// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const choice = "Кава";

switch (choice) {
  case "Кава":
    console.log("Ви обрали Каву. Смачного!");
    break;
  case "Чай":
    console.log("Ви обрали Чай. Гарного настрою!");
    break;
  case "Сік":
    console.log("Ви обрали Сік. Насолоджуйтесь!");
    break;
  default:
    console.log("Ваш вибір не визначений. Спробуйте ще раз");
    break;
}

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const dayOfWeek = "Неділя";

switch (dayOfWeek) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    console.log(`${dayOfWeek} це робочий день`);
    break;

  case "Субота":
  case "Неділя":
    console.log(`${dayOfWeek} це вихідний`);
    break;

  default:
    console.log("Введено не правильний день тижня");
    break;
}

// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const monthNumber = 1;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Це зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Це весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Це літо");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Це осінь");
    break;

  default:
    console.log(
      "Введено не правильний номер місяця. Введіть число від 1 до 12"
    );
    break;
}

// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = "червоний";

switch (color) {
  case "червоний":
    console.log("Стоп");
    break;

  case "зелений":
    console.log("Йти");
    break;

  case "жовтий":
    console.log("Чекати");
    break;

  default:
    console.log("Невідомий колір. Введіть 'червоний', 'зелений' або 'жовтий'");
    break;
}

// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
// Змінні для зберігання чисел та оператора
const num1 = 10;
const num2 = 0;
const operator = "/";

switch (operator) {
  case "+":
    console.log(`Результат: ${num1 + num2}`);
    break;

  case "-":
    console.log(`Результат: ${num1 - num2}`);
    break;

  case "*":
    console.log(`Результат: ${num1 * num2}`);
    break;

  case "/":
    if (num2 === 0) {
      console.log("Попередження: ділення на нуль неможливе");
    } else {
      console.log(`Результат: ${num1 / num2}`);
    }
    break;

  default:
    console.log("Невідомий оператор. Введіть '+', '-', '*' або '/'");
    break;
}
