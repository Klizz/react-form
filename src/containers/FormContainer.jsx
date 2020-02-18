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
  constructor() {
    super();
    this.state = {
      newUser: {
        name: "",
        age: ""
      },
      userSaved: INITIAL_STATE
    };
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleName(e) {
    let value = e.target.value;
    this.setState(
      // Mandar nuevo objeto a actualizar
      prevState => ({
        newUser: {
          // Deestructuracion para evitar perder los datos
          ...prevState.newUser,
          name: value
        }
      })
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      // Mandar nuevo objeto a actualizar
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      })
    );
  }

  handleFormSubmit(e) {
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

  handleClearForm(e) {
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
            handleChange={this.handleName}
          />
          <Input
            className="form"
            name="Age"
            type="number"
            value={this.state.newUser.age}
            placeholder="Ingresa tu edad"
            handleChange={this.handleAge}
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
