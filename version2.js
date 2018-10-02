let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (let i =0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText)
        }
      }
    }
  },
  //Create new item
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  //Change existing item
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  //Delete existing item
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  //Mark as completed
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
