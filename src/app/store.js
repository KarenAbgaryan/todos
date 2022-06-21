import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "../Components/todosSlise"



export const store = configureStore({
    reducer: {
        todos: todosReduser,
    },
});