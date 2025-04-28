import React, { Component } from "react";
import shortid from "shortid";

import Form from "./components/Form/Form";
import Book from "./components/Book/Book";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  addName = ({ name, tel }) => {
    const contact = {
      id: shortid.generate(),
      text: name,
      num: tel,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.addName} />
        <Book bookCont={contacts} />
      </>
    );
  }
}

export default App;
