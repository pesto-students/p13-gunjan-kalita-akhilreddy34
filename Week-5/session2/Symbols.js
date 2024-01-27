const closureFunctionToGenerateTransactionId = function () {
  let currentTransactionNumber = 0;
  return function () {
    return Symbol(`TRANSACTION_ID_${++currentTransactionNumber}`);
  };
};

const generateTransactionId = closureFunctionToGenerateTransactionId();
const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
