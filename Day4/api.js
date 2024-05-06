const expenses =[
    { id: 1, category :"food", amount :20, description:"eating", date: "01/2/23"},
    { id: 2, category :"chai", amount:30, description:"eating",date: "09/2/23"},
    { id: 3, category :"trasnport", amount:300, description:"transportion",date: "13/2/23"},
    { id: 4, category :"lightbill", amount:3000, description:"electricity bill",date: "17/2/23"},
    { id: 5, category :"petrol", amount:500, description:"fuel",date: "22/2/23"},

];

function findExpenseId(id){
    return expenses.find(expenses =>expenses.id ===id)
}
function findExpenseCategory(category){
    const categoryExpenses = expenses.filter(expenses =>expenses.category === category );
    const totalExpenses = categoryExpenses.reduce((total, expenses)=> total.amount,0);
     return {
        category:category,
        expenses:categoryExpenses,
        totalExpenses: totalExpenses
     };
}

function updateExpenseById(id, updateObject){
    expenses=expenses.map(expense =>{
        if(expenses.id=== id){
            const {id, ...rest} = updateObject;
            return{...expenses, ...rest};
        }
        else{
            return expense;
        }
    });
}

function deleteExpenseById(id){
    expenses = expenses.filter(expenses => expenses.id !==id);
}

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