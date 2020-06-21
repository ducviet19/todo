import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isEditing : false,
         task: this.props.task
      };
      this.handleDelete = this.handleDelete.bind(this)
      this.toggleForm = this.toggleForm.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
   }
   
   handleDelete() {
      this.props.deleteTodo(this.props.id)
   }
   toggleForm() {
      this.setState({
         isEditing : !this.state.isEditing
      })
   }
   handleUpdate(e) {
      e.preventDefault();
      this.props.updateTodo(this.props.id ,this.state.task)
      this.setState({
         isEditing: false
      })
   }
   handleChange(e) {
      this.setState({
         [e.target.name] : e.target.value
      })
   }
   render() {
      let result;
      if(this.state.isEditing) {
         result = (
            <div>
               <form className="Todo-edit" onSubmit={this.handleUpdate}>
                  <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                  <button>Save</button>
               </form>
            </div>
         )
      }
      else {
         result = (
            <div className="Todo-buttons">
               <button onClick={this.toggleForm}><i class='fa fa-pen' /></button>
               <button onClick={this.handleDelete}><i class='fa fa-trash' /></button>
                  <li>{this.props.task}</li>
            </div>
         )
      }
      return result;
   }
}


export default Todo;