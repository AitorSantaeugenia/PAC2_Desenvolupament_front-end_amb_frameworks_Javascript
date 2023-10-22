/**
 * @class View
 *
 * Visual representation of the model.
 */
class ExpenseView {
    constructor() {
        this.balance = document.getElementById('balance');
        this.money_plus = document.getElementById('money-plus');
        this.money_minus = document.getElementById('money-minus');
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');
        this.text = document.getElementById('text');
        this.amount = document.getElementById('amount');

        this._temporaryTodoText = "";

        this._initLocalListeners();
    }

    //Mètodes
    displayExpenses(expenses) {
        // Delete all expenses
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }

        //Show all expenses
        expenses.forEach((element) => (this.addExpenseDom(element)));

        this.updateValues(expenses);
    }

    // Add expense
    addExpenseDom(expense) {
        const sign = expense.amount < 0 ? '-' : '+';
        const item = document.createElement('li');

        item.classList.add(expense.amount < 0 ? 'minus' : 'plus');

        item.innerHTML = `
        ${expense.text} <span class="editable" contenteditable="true" id="${expense.id
        }">${sign}${Math.abs(
            expense.amount
        )}</span> <button class="delete-btn" id="${expense.id
            }">x</button>
        `;

        this.list.appendChild(item);
    }

    // Update expenses
    updateValues(expenses) {
        const amounts = expenses.map(expense => expense.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);

        const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

        this.balance.innerText = `$${total}`;
        this.money_plus.innerText = `$${income}`;
        this.money_minus.innerText = `$${expense}`;
    }

    bindAddExpense(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();

            if (this.text.value.trim() === '' || this.amount.value.trim() === '') {
                alert('Please add a text and amount');
            } else {
                handler(this.text.value, this.amount.value);
                this.text.value = "";
                this.amount.value = "";
            }
        });
    }

    bindDeleteExpense(handler) {
        this.list.addEventListener("click", event => {
          if (event.target.className === "delete-btn") {
            const id = event.target.id;
    
            handler(id);
          }
        });
      }

      bindEditExpense(handler) {
        this.list.addEventListener("focusout", event => {
          if (this._temporaryTodoText) {
  
            const id = event.target.id;
    
            handler(id, this._temporaryTodoText);
            this._temporaryTodoText = "";
          }
        });
      }

      _initLocalListeners() {
        this.list.addEventListener("input", event => {
          if (event.target.className === "editable") {
            this._temporaryTodoText = event.target.innerText;
          }
        });
      }
  }
  