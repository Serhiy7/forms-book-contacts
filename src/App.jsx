import React, { Component } from "react";
import shortid from "shortid";

import Form from "./components/Form/Form";
import Book from "./components/Book/Book";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // добавить новый контакт
  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    // Проверяем, есть ли уже контакт с таким именем (без учёта регистра)
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`Контакт с именем "${name}" уже существует.`);
      return;
    }

    const newContact = { id: shortid.generate(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // обновить фильтр
  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  // отфильтрованный список
  getVisibleContacts() {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalized)
    );
  }

  render() {
    const { filter } = this.state;
    const visible = this.getVisibleContacts();

    return (
      <div style={{ padding: 16 }}>
        <h1>Phonebook</h1>
        <Form onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />

        <Book contacts={visible} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
