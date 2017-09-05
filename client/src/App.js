import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {

state = {
  ats: [],
  toggleForma: false
}
  componentDidMount() {
  fetch('/users')
   .then(res => res.json())
   .then(ats => this.setState({ ats }));
  }

  search = (e)=> {
    var updatedList = this.state.ats;
    updatedList = updatedList.filter(function(item){
      return item.vardas.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    if (  e.target.value === "") {
      fetch('/users')
       .then(res => res.json())
       .then(ats => this.setState({ ats }));
    }
    this.setState({
      ats: updatedList
    })

  }

  refresh = ()=> {
    fetch('/users')
     .then(res => res.json())
     .then(ats => this.setState({ ats }));
  }

  toggleForma = ()=> {
    this.setState({
      toggleForma: !this.state.toggleForma
    })
  }

  render() {

    const { ats, toggleForma } = this.state
    let atsiliepimai = ats.map( a => {
      return (
        <div key={a._id} className="task-con">
          <div className="task">
          <div className="task-title">{a.vardas}</div>
          <div className="email"><p>{a.d}</p> <p>{a.email}</p> </div>
          <div className="task-text">{a.atsiliepimas}</div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">

        <div className="title">

        <h1> praktikos uzduotis </h1>
        <h4 className="atsiliepimai">atsiliepimai</h4>

        <div className="search"> <input
           type="text"
           id="myInput"
           onKeyUp={this.search}
           placeholder="Search for names.."/> </div>

        <button
          className="sukurti"
          onClick={this.toggleForma}
          >sukurti naują atsiliepimą</button>
          </div>
        {atsiliepimai}


          { toggleForma && <Form
            refresh={this.refresh}
            toggleForma={this.toggleForma}

          />}
      </div>

    );
  }
}

export default App;
