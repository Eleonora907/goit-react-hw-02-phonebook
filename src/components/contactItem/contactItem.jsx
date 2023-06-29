import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DeleteButton, ListItem } from './contactItem.styled';

export class ContactItem extends Component {
  handleDelete = () => {
    const { contact, onDeleteContact } = this.props;
    onDeleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <ListItem>
        {contact.name}: {contact.number}
        <DeleteButton type="button" onClick={this.handleDelete}>
          Delete
        </DeleteButton>
      </ListItem>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
 
};
