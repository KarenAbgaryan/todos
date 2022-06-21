import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext()



const DataProvider = ({children}) => {

    const [todos, setTodos] = useState([
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
    ])

    const onAdd = (todo) => {
        setTodos([...todos, todo])
    }

    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const onClearCompleted = () => setTodos(todos.filter(({isCompleted}) => !isCompleted))

    const onCheckboxValue = (id) => {
        
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                } 
            }
            return todo
        }))
    }

    const onEdit = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    type: "edit",
                    text2: todo.text
                } 
            }
            return todo
        }))
    }


    const onChangeText = (newText, id) => {
        if (newText !== '') {
            setTodos(todos.map(todo => {
                if (todo.type === "edit" && todo.id === id) {
                    
                    return {
                        ...todo,
                        text: newText,
                        type: ''
                    } 
                }
                return todo
            }))
        }
    }

    return (
        <DataContext.Provider value={{todos, onAdd, onDelete, onClearCompleted, onCheckboxValue, onEdit, onChangeText}}>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => useContext(DataContext)

export  {DataProvider, useData};