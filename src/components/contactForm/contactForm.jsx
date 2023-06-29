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
    this.props.addContact({ id: nanoid(), name, number });
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
};