// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = " ";

for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}
console.log("Завдання 1.", string);

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log("Defolt", cards);

// 3. Видалення (по індексу), метод indexOf()
const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

// console.log("Завдання 3.(видалення)", cards);
// Розкоментуйте log, я закоментував, бо тоді масиви так і без елементу

// // 4. Додавання (по індексу)
const cardToInsert = "Карточка-6";
const insertIndex = 7;

cards.splice(insertIndex, 0, cardToInsert);

console.log("Завдання 4.(додавання)", cards);

// 5. Оновлення (по індексу)
const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards[indexToUpdate] = "Оновлена-Карточка-4";
}

console.log("Завдання 5.(оновлення)", cards);
