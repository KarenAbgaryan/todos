import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    {
        id: Math.random(),
        text: "Learn JS",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn React",
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: "Learn Redux",
        isCompleted: false,
    }
]

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            state.push(action.payload)
        },

        onDelete: (state, action) => { //id
            return state.filter((todo) => todo.id !== action.payload)
        },

        onClearCompleted: (state) => state.filter(({ isCompleted }) => !isCompleted),

        onCheckboxValue: (state, action) => { //id

            return (state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            }))
        },

        // onEdit: (state, action) => { //id
        //     return (state.map(todo => {
        //         if (todo.id === action.payload) {
        //             return {
        //                 ...todo,
        //                 type: "edit",
        //                 text2: todo.text
        //             }
        //         }
        //         return todo
        //     }))
        // },


        onChangeText: (state, action) => {//newText, id
            if (action.payload.text2 !== '') {
                return (state.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            text: action.payload.text2,
                            // type: ''
                        }
                    }
                    return todo
                }))
            }
        },
        // onChangeText2: (state, action) => { //e.target.value
        //     return (
        //         state.map((todo) => {
        //             if (todo.text2 !== undefined) {
        //                 return {
        //                     ...todo,
        //                     text2: action.payload.inpVal
        //                 }
        //             }
        //             return todo
        //         })
        //     )
        // } 
    }
})


export const {
    onAdd,
    onDelete,
    onClearCompleted,
    onCheckboxValue,
    onEdit,
    onChangeText,
    onChangeText2
} = todosSlice.actions

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;