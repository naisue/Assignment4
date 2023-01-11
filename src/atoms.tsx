import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO" ,
    "ONGOING" = "ONGOING",
    "DONE" = "DONE"
}

export interface ITodo{
    text: string;
    id: number;
    category: Categories;
}

export const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
});

// toDoState를 modify하여 데이터를 가져오는 방식 = SELECTOR
export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);

        return toDos.filter(toDo => toDo.category === category);
    }
})

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})