import React, { useEffect, useState } from "react";

const TodoList =(props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value:"")

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
      const handelSubmit = (e) =>{
        e.preventDefault();

        props.onSunbmit({
            id:Math.floor(Math.random() *10000), text:input,
        })
        setInput("")
      }
    return(
        <form onSubmit={handelSubmit} className="todo-form">
            {props.edit (
                <>
                <input placeholder="Update your item" value={input} onChange={handleChange} name="text" ref={inputRef}
                 className="todo-input edit"/>
                 <button onClick={handelSubmit} className="todo-button edit"></button>
                </>

            )(<>
            <input placeholder="Add a Todo" 
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-inpt"
            ref={inputRef}

            />
            <button onClick={handelSubmit} className="todo-button">Add Todoss</button>
            </>
        )}
        </form>
    )
}

export default TodoList;