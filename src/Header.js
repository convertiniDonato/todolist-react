import React from 'react';

//sto passando come props la lunghezza dell'array dei tasks
const Header = ({numTodos}) => {
    return (
        <div className='text-center text-white my-1'>
            <h1>Lista Todos</h1>
            <h6>
                ci sono <b className='text-success'>{numTodos}</b> Todos
            </h6>
        </div>

    )
}

export default Header;