import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {

  state = {
    // tasks: ['task 1', 'task 2', 'task 3']
    tasks: [
      { nome: 'task 1', completato: false },
      { nome: 'task 2', completato: true },
      { nome: 'task 3', completato: false }
    ],
  };

  componentDidMount = () => {
    document.title = `Todos list - Ci sono ${this.state.tasks.length} Todos`

    if (JSON.parse(localStorage.getItem("tasksList")) == null) {
      localStorage.setItem('tasksList', JSON.stringify(this.state.tasks));
    }
    else {
      this.setState(
        { tasks: JSON.parse(localStorage.getItem("tasksList")) }
      );
    }
  }

  componentDidUpdate = () => {
    document.title = `Todos list - Ci sono ${this.state.tasks.length} Todos`

    localStorage.setItem('tasksList', JSON.stringify(this.state.tasks));
  }

  //splice() rimuove elemento da array
  handleDelete = (index) => {
    let listValue = JSON.parse(localStorage.getItem('tasksList'));
    listValue.splice(index, 1);
    this.setState({ tasks: listValue });
    localStorage.setItem('tasksList', JSON.stringify(listValue));
    // const newArr = [...this.state.tasks];
    // newArr.splice(index, 1); //secondo parametro indica il numero di elementi da rimuovere
    // this.setState({ tasks: newArr });
  }

  //inserimento todo
  handleSubmit = (task) => {
    let listValue = JSON.parse(localStorage.getItem('tasksList'));
    this.setState({ tasks: [...listValue, { nome: task, completato: false }] });
    localStorage.setItem('tasksList', JSON.stringify(this.state.tasks));
    // this.setState({ tasks: [...this.state.tasks, {nome: task, completato:false} ] }); //inserisco in fondo alla lista, a fine array
  }

  //cambio stato del flag all'elemento con quell'indice passato
  handleFlag = (index) => {
    let listValue = JSON.parse(localStorage.getItem('tasksList'));
    listValue[index].completato = !listValue[index].completato;
    this.setState({ tasks: listValue });
    localStorage.setItem('tasksList', JSON.stringify(listValue));
    // const newArr = [...this.state.tasks];
    // newArr[index].completato = !newArr[index].completato; 
    // this.setState({tasks: newArr});
  }

  //modificare task inserito già in lista
  handleModify = (task, index) => {
    let listValue = JSON.parse(localStorage.getItem('tasksList'));
    listValue[index].nome = task;
    this.setState({ tasks: listValue });
    localStorage.setItem('tasksList', JSON.stringify(listValue));
    // const newArr = [...this.state.tasks];
    // newArr[index].nome = task;
    // this.setState({tasks: newArr});
  }

  render() {

    return (

      <Container fluid className='bg-dark grandezza'>
        <Row>
          <Col sm={12} lg={4} className='mr-auto ml-auto px-0 border border-primary bg-dark' >

            <Header numTodos={this.state.tasks.length} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} changeFlag={this.handleFlag} modifyTask={this.handleModify} />
            <SubmitForm onFormSubmit={this.handleSubmit} />

          </Col>
        </Row>
      </Container>

    );
  }

}

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )

export default App;
