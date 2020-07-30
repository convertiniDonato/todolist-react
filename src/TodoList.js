import React from 'react';
import Todo from './Todo';
import { ListGroup } from 'react-bootstrap';

const TodoList = (props) => {

    const todos = props.tasks.map((todo, index) => {
        if (todo.completato === false)
            return <Todo content={todo.nome} flag={todo.completato} key={index} id={index} onDelete={props.onDelete} changeFlag={props.changeFlag} modifyTask={props.modifyTask} />
        return true;
    })

    const marked = props.tasks.map((todo, index) => {
        if (todo.completato === true)
            return <Todo content={todo.nome} flag={todo.completato} key={index} id={index} onDelete={props.onDelete} changeFlag={props.changeFlag} modifyTask={props.modifyTask} />
        return true;
    })

    /*tramite filter() prendo la lunghezza del'array gli elementi che rispecchiano la condizione
     del valore flag completato */
    const isCompletato = (flag) => {
        return props.tasks.filter(task => task.completato === flag).length;
    }

    return (
        <ListGroup className='text-left'>
            <hr className='border border-secondary mx-2 my-1'></hr>
            <h6 className='mx-2 my-1 text-danger'><b>✘ to do: {isCompletato(false)}</b></h6>
            {todos}
            <hr className='border border-secondary mx-2 mb-1'></hr>
            <h6 className='mx-2 my-1 text-success'><b>✓ done: {isCompletato(true)}</b></h6>
            {marked}
            <hr className='border border-secondary mx-2'></hr>
        </ListGroup>
    )
}

export default TodoList;

