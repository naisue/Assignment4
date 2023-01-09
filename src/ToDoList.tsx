import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

function ToDoList (){
    // const { register, watch, handleSubmit } = useForm();
    const { register, handleSubmit, formState } = useForm();

    const onValid = (data:any) => {
        console.log(data)
    }

    console.log(formState.errors)
    // formState.error updates what kind of error that each input has..

    // console.log(watch())
    
    /*  
        react hook form does
        onChange Event handler
        input props & setState 역할을 다 한다. 

        Register props 
        => https://react-hook-form.com/api/useform/register
    */

    return (
        <div>
            <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("Email", { required: "Please Enter your email address" })} placeholder="Email"/>
                <input {...register("First Name", { required: true, minLength: 10 })} placeholder="First Name"/>
                <input {...register("Last Name", { required: true })} placeholder="Last Name"/>
                <input {...register("Username", { required: true })} placeholder="Username"/>
                <input {...register("Password", { required: true })} placeholder="Password"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
