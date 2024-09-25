import React, { useState } from "react";
import TodoForm from "./TodoForm";
import {RiCloserCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

const TodoList =({todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setedit] =useState({
        id:null,
        value:"",

    })
    const submitUpdate = value =>{
        updateTodo(edit.id, value),
        setEdit({
            id:null,
            value:"",

        });
        if(edit.id){
            return <TodoForm edit={edit} onsubmit={submitUpdate} />;

        }
    }
    return todos.map((todo, index) => {
        <div className={todo.isComplete ? "todo-row complete": "todo-row "}
            key={index}>

                <div key={todo.id} onClick={(()=> {completeTodo(todo.id)})}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloserCircleLine
                     onClick={()=> removeTodo(todo.id)} 
                     className="delete-icon" />
                     <TiEdit onClick={()=>(setEdit({id: todo.id, value: todo.text}))} className="edit-icon"/>

                    </div>
        </div>
    })
}

export default TodoList;