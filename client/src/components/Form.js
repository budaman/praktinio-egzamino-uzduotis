import React, { Component } from 'react';

class Form extends Component {

  state = {
    vardas: "",
    email: "",
    atsiliepimas: ""
  }

  handleClick = ()=> {
    const { vardas, email, atsiliepimas } = this.state
    var d = new Date();
    if(vardas!=="" && email !=="" && atsiliepimas !=="") {
    fetch('atsiliepimas', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          vardas,
          email,
          atsiliepimas,
          d
        })
    })
    this.props.refresh()
    this.props.toggleForma()
  }else {
    alert('not everything is filled')
  } }

  render() {


    return (
      <div className="loginForm">
        <div
          className="closeButton"
          onClick={()=> {
            this.props.toggleForma()
          }}
          > X </div>
        <div className="inputs">
          <input
            type="text"
             placeholder="vardas"
             onChange = {(e) =>this.setState({vardas: e.target.value})}
            />
          <input
            type="email"
            placeholder="emailas"
            onChange = {(e) =>this.setState({email: e.target.value})}
          />
          <textarea
            placeholder="parasykite atsiliepima"
            onChange = {(e) =>this.setState({atsiliepimas: e.target.value})}
           />
           <button
             className="create-task"
             onClick={this.handleClick}
             >Prideti</button>
        </div>
      </div>
    );
  }
}

export default Form;
