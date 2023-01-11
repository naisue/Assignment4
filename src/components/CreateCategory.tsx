import { useForm } from "react-hook-form";
import { Categories } from "../atoms";


interface ICategoryForm {
    category: Categories;
}

function CreateCategory () {
    const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
    const onSubmit = (category:ICategoryForm) => {
        // 1. setValue로 인풋값 초기화
        // 2. setCategory로 atom에 있는 카테고리에 추가 (중복체크)
        // 3. enum 에도 category 추가
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("category", { maxLength: { value: 20, message: "Your category is too long" }})} placeholder="Write a category"/>
        <button>Add</button>
        </form>
    );
}

export default CreateCategory;