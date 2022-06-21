import { memo, useEffect, useState } from "react";
import { useData } from "../dataProvider";
import style from "./TodoForm.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from '@mui/material';
import { onAdd, selectTodods } from '../todosSlise'
import { useDispatch } from 'react-redux';


const TodoForm = () => {
//   const { onAdd } = useData();
  const [inpValue, setInpValue] = useState("");
  const dispatch = useDispatch()

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (inpValue !== "") {
          dispatch(onAdd({
            id: Math.random(),
            text: inpValue,
            isCompleated: false,
          }));
        }
        setInpValue("");
      }}
      className={style.todo_form}
    >
      <TextField
        label="Add Todo"
        id="outlined-size-small"
        size="small"
        value={inpValue}
        onChange={e => setInpValue(e.target.value)}
      />
      {/* <input type="text" value={inpValue} onChange={e => setInpValue(e.target.value)}/> */}
      <Button
        variant="outline-dark"
        onClick={() => {
          if (inpValue !== "") {
            dispatch(onAdd({
              id: Math.random(),
              text: inpValue,
              isCompleated: false,
            }));
          }
          setInpValue("");
        }}
      >
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
