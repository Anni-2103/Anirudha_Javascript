import expenses from "./Data.js";


function findExpenseById(id){

    return expenses.find(expense =>expense.id === id);
    
}

console.log(findExpenseById(20));

function updateExpenseById(id,updatedExpense){

    const index = expenses.findIndex(expense => expense.id === id);
    expenses[index] = {...expenses[index],...updatedExpense};
    console.log(`expense with id ${id} updated successfully`);
    
    return expenses[index];
    
}

console.log(updateExpenseById(10,{category :"shopping", amount:500, description:"shirt",date: "29/2/23"}));

function deleteExpenseById(id){

    const index = expenses.findIndex(expense => expense.id ===id);
    let deletedExpense = expenses.splice(index,1);
    console.log(`expense id ${id} deleted`)

    return deletedExpense;

}

console.log(deleteExpenseById(3));

function getTotalExpensesinDateRange(startDate, endDate){
    const totalExpenses = expenses.reduce((total, expense) =>{
        if (expense.date >= startDate && expense.date <=endDate){
            return total+ expense.amount;
        }
        else{
            return total;
        }
    }, 0);

    return totalExpenses;   
}
const DateRangeExpenses = (getTotalExpensesinDateRange("01/2/23","22/2/23"));
console.log(`Total expense from of daterange is ${DateRangeExpenses}`);



function findExpenseCategory(category){
    const categoryExpenses = expenses.filter(expenses =>expenses.category === category );
    const totalExpenses = categoryExpenses.reduce((total, expense)=> total+ expense.amount,0);
     return totalExpenses;
}
const officetotal = (findExpenseCategory("office"));
console.log(`total expense for offices is ${officetotal}`);
   