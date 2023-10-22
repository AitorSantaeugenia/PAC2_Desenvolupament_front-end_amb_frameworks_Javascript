/**
 * @class ExpenseServices
 *
 * Manages the data of the application.
 */
class ExpenseServices {
    constructor() {
        this.expenses = (JSON.parse(localStorage.getItem('expenses')) || []).map(
            expense => new Expense(expense)
        );
    }

    bindExpenseListChanged(callback) {
        this.onExpenseListChanged = callback;
    }

    _commit(expenses) {
        this.onExpenseListChanged(expenses);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense({ text, amount }));

        this._commit(this.expenses);
    }

    deleteExpense(_id) {
        const _idToDelete = _id;
        this.expenses = this.expenses.filter(expense => expense.id !== +_idToDelete);

        this._commit(this.expenses);
    }

    editExpense(_id, amount) {
        let indexOfItemInArray = this.expenses.findIndex(q => q.id === +_id);

        let newItem = {
            id: +_id,
            text: this.expenses[indexOfItemInArray].text,
            amount: +amount
        }
        if (indexOfItemInArray > -1) {
            this.expenses[indexOfItemInArray] = newItem;
         }

    
        this._commit(this.expenses);
      }     
}