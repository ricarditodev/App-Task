// Importando todo lo necesario
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Importando componentes externos
import { tasks } from './tasks.json';

import FormTask from './components/FormTask';


// Componente principal
class App extends Component {
   constructor() {
      super();
      this.state = {
         tasks
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
   }

   handleAddTodo(todo) {
      this.setState({
         tasks: [...this.state.tasks, todo]
      })
   }

   removeTask(index) {
      if (window.confirm('Estas seguro de eliminar?')) {
         this.setState({
            tasks: this.state.tasks.filter((e, i) => {
               return i !== index
            })
         })
      }
   }

   render() {
      const todos = this.state.tasks.map((task, i) => {
         return(
            <div className="col-md-4" key={i}>
               <div className="card mt-4">
                  <div className="card-header">
                     <h3> { task.title } </h3>
                     <span className="badge badge-pill badge-danger ml-2">
                        { task.priority }
                     </span>
                  </div>
                  <div className="card-body">
                     <p> { task.description } </p>
                     <p><mark> { task.responsible } </mark> </p>
                  </div>
                  <div className="card-footer">
                     <button
                      className="btn btn-danger"
                      onClick={this.removeTask.bind(this, i)}
                     >
                      Delete  
                     </button>
                  </div>
               </div>
            </div>
         )
      })
      
      return (
         <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="navbar navbar-dark bg-dark">
               <a href="https://google.com" className="text-white">
                  Tasks
                  <span className="badge badge-pill badge-light ml-2">
                     { this.state.tasks.length }
                  </span>
               </a>
            </nav>

            <div className="container">
               <div className="row mt-4">
                  <div className="col-md-3">
                     <FormTask onAddTodo={this.handleAddTodo}/>
                  </div>
                  <div className="col-md-9">
                     <div className="row">
                        { todos }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
