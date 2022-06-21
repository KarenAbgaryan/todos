import React, { useState } from "react";
import { useData } from "../dataProvider";
import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
import Modal from "./../Modal/Modal";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "@mui/material";
import { onChangeText, onChangeText2, selectTodos } from '../todosSlise';
import { useSelector, useDispatch } from 'react-redux'
import { memo } from "react";

let a=  0
const TodoList = () => {

  // const { todos, onChangeText } = useData();
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const [newText, setNewText] = useState("");
  const [text2, setText2] = useState(" ");
  const [modalActive, setModalActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idS, setIdS] = useState(0);
  
  return (
    <div>
      {a++}
      {todos.map(todo => {
        if (edit === true && idS === todo.id) { // todo.type === 'edit'
          return (
            <>
              <div key={todo.id}>
                <TodoItem todo={todo} setActive={setModalActive} />
              </div>
              <Modal
                active={modalActive}
                setActive={setModalActive}
                newText={newText}
                setEdit={setEdit}
              >
                <form style={{height: '100%', width: '257px', display: 'flex', justifyContent: 'space-between'}}
                  onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(onChangeText({text2, id: todo.id}));
                    setModalActive(false);
                    setEdit(false)
                  }}
                >
                  <Input
                    type="text"
                    value={text2}
                    onChange={e => {
                      setText2(e.target.value)
                      // setNewText(e.target.value);
                      // dispatch(onChangeText2({text2}));
                    }}
                  />
                  <Button
                    variant="outline-primary"
                    className={style.modal_edit_button}
                    onClick={() => {
                      dispatch(onChangeText({newText, id: todo.id}));
                      setModalActive(false);
                      setEdit(false)
                    }}
                  >
                    Edit
                  </Button>
                </form>
              </Modal>
            </>
            // <form onSubmit={() => onChangeText(newText)}>
            //     <input type="text" onChange={(e) => setNewText(e.target.value)}/>
            //     <button>Edit</button>
            // </form>
          );
        }
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} setActive={setModalActive} setEdit={setEdit} setIdS={setIdS} setText2={setText2}/>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
