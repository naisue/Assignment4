import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "../atoms";

function ToDo({ text, category, id }:ITodo) {
    // const onClick = (newCategory:ITodo["category"]) => {
    const setToDos = useSetRecoilState(toDoState);


    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name }, } = event;
        // 1. find the location of todo that we want to modify
        // 2. build a new todo? => this is to prevent mutation 
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((todo)=> todo.id === id);
            const newToDo = { text, id, category: name as any };

            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        })
    }

    return (<li >
        <span>{text}</span> 
        {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
        {category !== Categories.ONGOING && <button name={Categories.ONGOING} onClick={onClick}>On Going</button>}
        {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
    </li>);
}

export default ToDo;