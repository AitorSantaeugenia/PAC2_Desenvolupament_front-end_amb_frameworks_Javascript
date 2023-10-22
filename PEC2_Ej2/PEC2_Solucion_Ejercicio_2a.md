### PEC2_EJ2 - Pregunta a) 
## Per què és el valor de this és undefined?

- Les funcions fletxa ("*fat arrow*") tenen un comportament especial amb el *"this"* ja que poden heretar el valor *"this"* del context on ho hereten, en lloc de tenir el seu propi *"this"*.
- En el cas de l'exercici el *"this.view.bindAddTodo(this.service.addTodo);"* faria referencia al del arxiu *todo.service.js* en lloc del *todo.controller.js*, per lo que no podria emprar el mètode del *"todo.controller.js"* *"handleAddTodo"*
- Cal dir que no estic segur de que si es pogués fer funcionaria amb el mètode a canviar (no he fet la prova), ja que faría falta la referència del *"todoText"*, però normalment el mètode **bind()** sol ser útil en alguns casos per no perdre la referencia del *"this"*.