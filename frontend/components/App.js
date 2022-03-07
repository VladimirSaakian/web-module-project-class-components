import React from 'react';
import TodoList from './TodoList';
import Form from './Form';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  handleAdd = (task) =>{
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos,newToDo]
  });
  }

  handleClear = () =>{
    this.setState({
      ...this.state,
      Todos: this.state.todos.filter(todo => {
        return (todo.completed == false);
      }
        )
  });
  }

  handleToggle = () =>{
    const clickedId = 1528817084358;
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo =>{
        if (todo.id === clickedId) {
          return{
            ...todo,
            completed: !todo.completed
          }
        }else{
          return todo
        }
      })
    });
  }
  render() {
    
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggle={this.handleToggle} todos = {todos}/>
        <Form handleAdd = {this.handleAdd} />
        <button onClick={this.handleClear}>Hide</button>
      </div>
    );
  }
}

export default App;
