import React, { memo } from "react";
import { useData } from "../dataProvider";
import style from "./TodoList.module.css";
import { Button, FormControlLabel, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { onCheckboxValue, onDelete, onEdit } from "../todosSlise";
import { useDispatch } from 'react-redux';

let a = 0
const TodoItem = ({ todo, setActive, setEdit, setIdS, setText2 }) => {
  // const { onDelete, onCheckboxValue, onEdit } = useData();
  const dispatch = useDispatch()

  return (
    <div className={style.todoItem}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          onChange={() => dispatch(onCheckboxValue(todo.id))}
          label={todo.text}
        />
      </FormGroup>
      <IconButton aria-label="delete" onClick={() => dispatch(onDelete(todo.id))}>
        <DeleteIcon />
      </IconButton>
      <Button
        variant="outlined"
        style={{ height: "35px" }}
        onClick={() => {
          // dispatch(onEdit(todo.id));
          setEdit(true)
          setActive(true);
          setIdS(todo.id)
          setText2(todo.text)
        }}
      >
        Edit
      </Button>
      {a++}
    </div>
  );
};

export default memo(TodoItem);
