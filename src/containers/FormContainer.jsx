import React, { Component } from "react";
import Input from "../components/Input";
import PreviewData from "../components/PreviewData";
import Button from "../components/Button";

const INITIAL_STATE = [
  {
    name: "Karen",
    age: "26"
  }
];

class FormContainer extends Component {
state = {
      newUser: {
        name: "",
        age: ""
      },
      userSaved: INITIAL_STATE
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        userSaved: data
      })
    })
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let age = e.target.age
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
          [age]: value
        }
      })
    );
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newUser;
    this.setState(prevState => ({
      userSaved: [...prevState.userSaved, userData],
      newUser: {
        name: "",
        age: ""
      }
    }));
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: ""
      }
    });
  }

  render() {
    return (
      <div className="row">
        <h1>Formulario React JS</h1>
        <form>
          <Input
            className="form"
            name="name"
            type="text"
            value={this.state.newUser.name}
            placeholder="Ingresa tu nombre"
            handleChange={this.handleInput}
          />
          <Input
            className="form"
            name="age"
            type="number"
            value={this.state.newUser.age}
            placeholder="Ingresa tu edad"
            handleChange={this.handleInput}
          />
          <Button action={this.handleFormSubmit} title="Enviar" />
          <Button action={this.handleClearForm} title="Borrar todo" />
        </form>
        <PreviewData data={this.state.userSaved} />
      </div>
    );
  }
}

export default FormContainer;
