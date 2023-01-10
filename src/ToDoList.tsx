import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// function ToDoList() {
//     const [todo, setTodo] = useState("");
//     const [todoError, setToDoError] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const { currentTarget: { value }, } = event; // event라는 변수에서 currentTarget이라는 값의 value를 destructure 구조로 가져온다.
//         setToDoError("")
//         setTodo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(todo.length < 10){
//             return setToDoError("To do should be longer.")
//         } 
//         console.log("submit")
//     }

//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={ onChange } value={ todo } placeholder="Write a to do"/>
//             <button>Add</button>
//             { todoError !== "" ? todoError : null }
//         </form>
//     </div>;
// }

const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
});

interface IForm {
    toDo: string;
}

interface ITodo{
    text: string;
    id: number;
    category: "TO_DO" | "ONGOING" | "DONE";
}

function ToDoList (){
    // const { register, watch, handleSubmit } = useForm();
    const { register, handleSubmit, setValue } = useForm<IForm>();    
    const [toDos, setToDos] = useRecoilState(toDoState);


    const onSubmit = ({ toDo }:IForm) => {
        setValue("toDo", "");
        setToDos((oldToDos) => [{ text:toDo, category:"TO_DO", id: Date.now() }, ...oldToDos]);
    }

    console.log(toDos)

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("toDo", { required: "Please write a todo" })} placeholder="Write a to do"/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    );
}

export default ToDoList;
