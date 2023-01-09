import React, { useState } from "react";

function ToDoList() {
const [todo, setTodo] = useState("");
const [todoError, setToDoError] = useState("")
const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value }, } = event; // event라는 변수에서 currentTarget이라는 값의 value를 destructure 구조로 가져온다.
    setToDoError("")
    setTodo(value);
};
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todo.length < 10){
        return setToDoError("To do should be longer.")
    } 
    console.log("submit")
}

    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={ onChange } value={ todo } placeholder="Write a to do"/>
            <button>Add</button>
            { todoError !== "" ? todoError : null }
        </form>
    </div>;
}

export default ToDoList;
