import React, { memo } from 'react';
import { useEffect } from 'react';
import { useData } from '../dataProvider';
import style from "./TodoFooter.module.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { onClearCompleted, selectTodos } from '../todosSlise';

let a = 0
const TodoFooter = () => {
    // const {todos, onClearCompleted} = useData()
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    const completed = todos.filter((todo) => todo.isCompleted).length
a++

    return (
        <div className={style.todo_footer}>
            
            {completed} / {todos.length} Completed {a}
            <Button variant="outline-success" onClick={() => completed > 0 && dispatch(onClearCompleted())}>Clear Completed</Button>
        </div>
    );
};

export default TodoFooter;