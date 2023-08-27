class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountHolderName, balance, accountNumber) {
    this.#accountHolderName = accountHolderName;
    this.#balance = balance;
    this.#accountNumber = accountNumber;
  }
}

class CheckingAccount extends BankAccount {
  #balance = 0;
  constructor(accountHolderName, balance, accountNumber) {
    super(accountHolderName, balance, accountNumber);
  }

  deposit(amount) {
    this.#balance = this.#balance + amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance = this.#balance - amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends BankAccount {
  #balance = 0;
  constructor(accountHolderName, balance, accountNumber) {
    super(accountHolderName, balance, accountNumber);
  }

  deposit(amount) {
    this.#balance = this.#balance + amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance = this.#balance - amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const checkingAccountInstance = new CheckingAccount("Akhil", 2000, "12345");
const savingsAccountInstance = new SavingsAccount("Nikhil", 5000, "45678");

checkingAccountInstance.deposit(2000);
console.log(
  `after deposit checkingAccountInstance balance ${checkingAccountInstance.getBalance()}`
);
checkingAccountInstance.withdraw(1000);
console.log(
  `after withdraw checkingAccountInstance balance ${checkingAccountInstance.getBalance()}`
);

savingsAccountInstance.deposit(4000);
console.log(
  `after deposit savingsAccountInstance balance ${savingsAccountInstance.getBalance()}`
);
savingsAccountInstance.withdraw(2000);
console.log(
  `after withdraw savingsAccountInstance balance ${savingsAccountInstance.getBalance()}`
);
