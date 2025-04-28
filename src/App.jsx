import React, { Component } from "react";
import shortid from "shortid";

import Form from "./components/Form/Form";
import Book from "./components/Book/Book";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const newContact = { id: shortid.generate(), name, number };
    this.setState({
      contacts: [newContact, ...contacts],
      name: "",
      number: "",
    });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <Form
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Book contacts={contacts} />
      </>
    );
  }
}

export default App;
