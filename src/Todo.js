import React from 'react';
import { ListGroup, Button, InputGroup, Form } from 'react-bootstrap';

const Todo = (props) => {

    return (
        <ListGroup.Item className='bg-secondary mx-2 px-1 py-1 text-white border border-dark' >

            <InputGroup>

                <InputGroup.Checkbox className='mx-1' defaultChecked={props.flag ? true : false}
                    onClick={() => { props.changeFlag(props.id) }} />

                <Form.Control type='text' className='bg-secondary px-1 border-0 text-white inputTodo' value={props.content}
                    onChange={(e) => props.modifyTask(e.target.value, props.id)}
                    onKeyDown={(e) => { if (e.keyCode === 13) e.target.blur() }} //premendo Enter si leva il focus input
                    style={{ textDecoration: props.flag ? 'line-through' : '' }} />

                <Button size='sm' variant='danger' className='float-right mx-1 deleteButton'
                    onClick={() => { props.onDelete(props.id) }} > <b>✖</b>
                </Button>
                    
            </InputGroup>

        </ListGroup.Item>
    )
}

export default Todo;