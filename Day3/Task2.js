
import { faker } from 'https://esm.sh/@faker-js/faker';

// Function to generate a unique id for each expense
const generateUniqueId = (config = {}) => {
  const { prefix } = config;
  if (prefix) {
    return prefix + "-" + Math.random().toString(36).substring(2);
  }
  return Math.random().toString(36).substring(2);
};

// Function to generate random expenses
const generateRandomExpenses = (numExpenses) => {
  const expenses = [];

  for (let i = 0; i < numExpenses; i++) {
    const expense = {
      id: generateUniqueId({ prefix: "exp" }),
      category: faker.helpers.arrayElement(["loan", "emi", "Entertainment", "Shopping", "Travel"]),
      description: faker.lorem.sentence(),
      amount: faker.finance.amount()
    };
    expenses.push(expense);
  }

  return expenses;
};


const numExpenses = 40;
const randomExpenses = generateRandomExpenses(numExpenses);
console.log(randomExpenses);