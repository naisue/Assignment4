import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDos (){
    const { register, handleSubmit, setValue } = useForm<IForm>();
    // TODOLIST의 상태관리 파트    
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);

    const onSubmit = ({ toDo }:IForm) => {
        // IForm의 input value를 리셋해주고,
        setValue("toDo", "");
        // 현재 toDoState가 가지고 있는 TODOLIST들을 가져와서 그 안에 새로운 데이터를 추가
        // {... oldToDos}는 oldToDos라는 배열안에 직접 요소를 추가할 수 있다. 
        // 여기서 assign해주는 category는 ToDoList에서 선택한 category 값을 새로운 Todo를 만들때 넘겨주는 props
        setToDos(
            (oldToDos) => [{ text:toDo, category, id: Date.now() }, 
            ...oldToDos]
            );
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", { required: "Please write a todo" })} placeholder="Write a to do"/>
        <button>Add</button>
    </form>
);
}

export default CreateToDos;