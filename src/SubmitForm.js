import React, { useState } from 'react';

//trasformo in function component usando State Hook per il campo di input

const SubmitForm = (props) => {

    const [testo, setTesto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //impedisce di aggiornare la pagina al submit
        if (testo.trim() === '') return;
        props.onFormSubmit(testo);
        setTesto(''); //resetto a testo vuoto il campo di input
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group text-center'>
                <input
                    type='text'
                    className='mr-2 py-1'
                    placeholder='Inserisci Todo...'
                    value={testo}
                    onChange={(e) => setTesto(e.target.value)}
                />
                <button type='submit' className='btn btn-primary mb-2 mt-1'><b>Inserisci</b></button>
            </div>
        </form>
    );


}

// realizzato con la class component
// class SubmitForm extends React.Component {

//     state = { testo: '' };

//     handleSubmit = (e) => {
//         e.preventDefault(); //impedisce di aggiornare la pagina al submit
//         if (this.state.testo.trim() === '') return;
//         this.props.onFormSubmit(this.state.testo);
//         this.setState({ testo: '' }); //resetto a testo vuoto il campo di input
//     }

//     render() {
//         return (
//             // <form onSubmit={this.handleSubmit}>
//             <form>
//                 <div className='form-group text-center'>
//                 <input
//                     type='text'
//                     className='mr-2 py-1'
//                     placeholder='Inserisci Todo...'
//                     value={this.state.testo}
//                     onChange={(e) => this.setState({ testo: e.target.value })}
//                 />
//                 <button type='submit' className='btn btn-primary py-1' onClick={this.handleSubmit}><b>Inserisci</b></button>
//                 </div>
//             </form>
//         );
//     }
// }

export default SubmitForm;