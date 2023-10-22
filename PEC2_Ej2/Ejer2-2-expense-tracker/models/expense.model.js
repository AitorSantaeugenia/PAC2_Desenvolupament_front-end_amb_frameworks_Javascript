/**
 * @class Model
 *
 * Manages the data of the application.
 */

class Expense {
    constructor({ id, text, amount }) {
      this.id = (id === undefined ? this.generateID() : id )
      this.text = text;
      this.amount = +amount;
    }

    // Mètodes
    
    // Generate random ID
    generateID() {
      return Math.floor(Math.random() * 100000000);
    }
  }
  