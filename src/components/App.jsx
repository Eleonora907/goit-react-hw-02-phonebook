import React, { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isContactDuplicate = newContact => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  addContact = newContact => {
    if (this.isContactDuplicate(newContact)) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
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
        <ContactForm addContact={this.addContact} />
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