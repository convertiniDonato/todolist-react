import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import './App.css';

class App extends React.Component {

  state = {
    // tasks: ['task 1', 'task 2', 'task 3']
    tasks : [
      {nome: 'task 1', completato: false},
      {nome: 'task 2', completato: true},
      {nome: 'task 3', completato: false}
    ], 
  };

  componentDidMount = () => {
    document.title = `Todos list - Ci sono ${this.state.tasks.length} Todos`
  }

  componentDidUpdate = () => {
    document.title = `Todos list - Ci sono ${this.state.tasks.length} Todos`
  }

  //splice() rimuove elemento da array
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1); //secondo parametro indica il numero di elementi da rimuovere
    this.setState({ tasks: newArr });
  }

  //inserimento todo
  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, {nome: task, completato:false} ] }); //inserisco in fondo alla lista, a fine array
  }

  //cambio stato del flag all'elemento con quell'indice passato
  handleFlag = (index) => {
    const newArr = [...this.state.tasks];
    newArr[index].completato = !newArr[index].completato; 
    this.setState({tasks: newArr});
  }

  //modificare task inserito già in lista
  handleModify = (task, index) => {
    const newArr = [...this.state.tasks];
    newArr[index].nome = task;
    this.setState({tasks: newArr});
  }

  render() {

    return (

      <div className='container-fluid bg-dark grandezza'>
        <div className='row'>
          <div className="col-sm-12 col-lg-4 mr-auto ml-auto px-0 border border-primary bg-dark">
       
            
                <Header numTodos={this.state.tasks.length} />
                <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} changeFlag={this.handleFlag} modifyTask={this.handleModify} />
                <SubmitForm onFormSubmit={this.handleSubmit} />
              
         
          </div>
        </div>
      </div> //end container

    );
  }

}

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )

export default App;
