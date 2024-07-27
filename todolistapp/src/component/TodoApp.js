import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
  render() {
    return (
      <div className='todo-container'>
        <form className='input-section'>
            <h1>ToDoApp</h1>
            <input type="text" placeholder='Enter list element...'/>
        </form>
        <ul>
            <li>
                Item <i class="fa-solid fa-trash-can"></i>
            </li>
            <li>
                 Item <i class="fa-solid fa-trash-can"></i>
            </li>
            <li>
                  Item <i class="fa-solid fa-trash-can"></i>
            </li>
        </ul>
      </div>
    )
  }
}
