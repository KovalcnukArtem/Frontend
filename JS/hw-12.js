// 1. Напиши скрипт, який, для об'єкта user, послідовно:
//     додає поле mood зі значенням 'happy'
//     замінює значення hobby на 'skydiving'
//     замінює значення premium на false
//     виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: "Іван Петренко",
  age: 30,
  hobby: "reading",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`1. ${key}: ${user[key]}`);
}

// 2. Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const human = {
  name: "Артем",
  age: 30,
  hobby: "swimming",
};

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log("2. К-ть властивостей:", countProps(human));

// 3. Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників
//     і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники
//     і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я": "кількість задач".
const employees = {
  Anna: 29,
  Serhiy: 35,
  Oleh: 17,
  Maria: 42,
};

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

console.log("3.", findBestEmployee(employees));

// 4. Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її.
//     Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const salaries = {
  Anna: 1500,
  Serhiy: 2000,
  Oleh: 1800,
  Maria: 2200,
};

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

console.log("4.", countTotalSalary(salaries));

// 5. Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//     Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 110 },
];

function getAllPropValues(arr, prop) {
  const result = [];
  for (const item of arr) {
    if (item[prop] !== undefined) {
      result.push(item[prop]);
    }
  }
  return result;
}

console.log("5.", getAllPropValues(products, "price"));

// 6. Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту(значення властивості name).
//     Повертає загальну вартість продукту(ціна * кількість).
//     Викличи функції для перевірки працездатності твоєї реалізації.
// const products = [
//   { name: "Apple", price: 10, quantity: 3 },
//   { name: "Banana", price: 5, quantity: 6 },
//   { name: "Orange", price: 8, quantity: 4 },
// ];

// function calculateTotalPrice(allProducts, productName) {
//   let totalPrice = 0;

//   for (const product of allProducts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice(products, "Apple"));
// console.log(calculateTotalPrice(products, "Banana"));
// console.log(calculateTotalPrice(products, "Orange"));
// console.log(calculateTotalPrice(products, "Grapes"));

//7.     Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи
// для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Кожна транзакція - це об'єкт з властивостями: 
id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      type: type,
      amount: amount,
    };
    return transaction;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },
  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      return "Зняття такої суми неможливе! Недостатньо коштів";
    }
    this.balance -= amount;
    this.transactions.push(newTransaction);
  },
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Not found!";
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

console.log(account.getBalance());
// account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
// account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log("Transaction 1: ");
console.log(account.getTransactionDetails(1));
console.log("Transaction 3: ");
console.log(account.getTransactionDetails(3));
console.log("Transaction 4: ");
console.log(account.getTransactionDetails(4));
console.log(account.transactions);

// console.log('Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW));
// console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
