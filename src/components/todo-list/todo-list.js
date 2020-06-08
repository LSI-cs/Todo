import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({todos, onDeleted,onToggleDone,onToggleImportant,visible}) =>{

const elements = todos.map((item) => {

    const {id,visible, ...itemProps} = item;

    let classNames='list-group-item';
    if (!visible){
        classNames+=' d-none';
      }

    return(
        <li key ={id} className={classNames} >
            <TodoListItem { ... itemProps }
            onDeleted= {()=>onDeleted(id)}
            onToggleImportant = {() => onToggleImportant(id)}
            onToggleDone = {() => onToggleDone(id)}
            />
        </li>
    )
}

)
    return (
    <ul className="list-group todo-list">
            { elements}
    </ul> 
    );
};

export default TodoList;