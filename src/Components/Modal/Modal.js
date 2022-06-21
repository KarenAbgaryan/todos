import React from 'react';
import { useData } from '../dataProvider';
import style from './modal.module.css'

const Modal = ({ active, setActive, children, newText, setEdit}) => {
  const {onChangeText} = useData()
    
    return (
        <div className={active && style.modal} onClick={() => {
          onChangeText(newText)
          setActive(false)
          setEdit(false)
          }} >
            <div className={active ? style.modal_content : style.dispnone} onClick={(e) => {
                e.stopPropagation()
            }}>
                {children}
            </div>
        </div >
    );
};

export default Modal;