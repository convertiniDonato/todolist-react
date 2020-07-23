import React from 'react';
import Todo from './Todo';

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

    return (
        <div className='list-group text-left my-3'>
            <hr className='border border-secondary mx-2'></hr>
            <h6 className='mx-2 my-2 text-danger'><b>✘ to do:</b></h6>
            {todos}
            <hr className='border border-secondary mx-2'></hr>
            <h6 className='mx-2 my-2 text-success'><b>✔ done:</b></h6>
            {marked}
            <hr className='border border-secondary mx-2'></hr>


        </div>
    )
}

export default TodoList;

