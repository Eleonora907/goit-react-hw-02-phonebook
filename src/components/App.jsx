import React, { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';

export class App extends Component  {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

