import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : []
        }
        this.create = this.create.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this)
    }
    create(newTodo) {
        this.setState({
            todos : [...this.state.todos , newTodo]
        })
    }
    deleteTodo(id) {
        this.setState({
            todos : this.state.todos.filter(todo => 
                todo.id !== id)
        });

    }
    updateTodo(id, updateTask) {
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updateTask}
            }
            return todo;
        });
        this.setState({
            todos : updateTodos
        })
    }
   render() {
       const todos = this.state.todos.map(todo => {
           return (
               <Todo 
               key={todo.id} 
               id={todo.id} 
               task={todo.task} 
               deleteTodo={this.deleteTodo}
               updateTodo = {this.updateTodo}
                />
           )
       })
       return(
           <div className="TodoList">
               <h1>Todo List</h1>
               <NewTodoForm createTodo={this.create} />
               <ul>
                   {todos}
               </ul>
           </div>
       )
   }
}
export default TodoList;