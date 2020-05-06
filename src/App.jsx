import React, { Component, Fragment } from 'react';
import './App.scss';
import { Topbar, Filters, Contacts } from './components';
import { sort } from './utils';

class App extends Component {

  constructor(props) {
    super(props);
    this.search_tags = [
      'Nome',
      'País',
      'Empresa',
      'Departamento',
      'Data de admissão'
    ];
    this.state = {
      tag: 0, // 0 = Nome, 1 = País, 2 = Empresa, 3 = Departamento, 4 = Data de admissão
      contacts: [],
      searched_contacts: []
    }
  }

  componentDidMount() {
    fetch('http://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => {
        response.json()
          .then(data =>
            this.setState({ contacts: data, searched_contacts: sort(data, 0) })
          )
      })
      .catch(error => console.log(error))
  }

  handleState = (obj) => {
    this.setState(obj);
  }

  render() {
    return (
      <Fragment>
        <Topbar />
        <Filters {...this.state} setState={this.handleState} />
        <Contacts contacts={this.state.searched_contacts} />
      </Fragment>
    )
  }
}

export default App;
