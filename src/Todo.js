import React from 'react';

const Todo = (props) => {

    return (
        
        <li className='list-group-item mx-1 px-1 bg-secondary text-white border border-dark'>
                
            {/* {props.content} */}
            <input type='text' className="bg-secondary border-0 inputTodo" value={props.content}
                onChange={(e) => props.modifyTask(e.target.value, props.id)}
                onKeyDown={(e)=>{if (e.keyCode === 13) e.target.blur()}} //premendo Enter si leva il focus input
                style={{ textDecoration: props.flag ? 'line-through' : '' }}>
            </input>

            <input type="checkbox" className="checkBox float-left mx-1 my-2" defaultChecked={props.flag ? true : false}
                onClick={() => { props.changeFlag(props.id) }}>
            </input>

            <button className='btn btn-danger float-right py-0 deleteButton' 
                onClick={() => { props.onDelete(props.id) }}>
                    <b>✖</b>
            </button>

            {/* <button className={(props.flag === true) ? 'btn btn-success float-right py-0 mx-2' : 'btn btn-primary float-right py-0 mx-2'}
                onClick={() => { props.changeFlag(props.id) }}>

                {(props.flag === true) ? 'completato' : 'incompleto'}

            </button> */}

        </li>
    )
}

export default Todo;