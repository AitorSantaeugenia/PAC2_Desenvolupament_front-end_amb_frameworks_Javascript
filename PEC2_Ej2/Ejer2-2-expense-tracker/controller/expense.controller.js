/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class ExpenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
    
        // Explicit this binding
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);
        this.view.bindEditExpense(this.handleEditExpense);
    
        // Display initial todos
        this.onExpenseListChanged(this.service.expenses);
      }

      //Mètodes
      onExpenseListChanged = expenses => {
        this.view.displayExpenses(expenses);
      };
    
      handleAddExpense = (expenseText, expenseQuant) => {
        this.service.addExpense(expenseText, expenseQuant);
      };
    
      handleDeleteExpense = id => {
        this.service.deleteExpense(id);
      };

      handleEditExpense = (id, amount) => {
        this.service.editExpense(id, amount);
      };
  }
  