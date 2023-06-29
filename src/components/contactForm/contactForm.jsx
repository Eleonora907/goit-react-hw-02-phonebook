import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Button, Form, Input, Label } from './contactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    if (name === 'number' && !/^\d*$/.test(value)) {
      Notiflix.Notify.failure('Only numbers are allowed in the phone number field');
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const isDuplicate = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
        Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
