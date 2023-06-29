import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label } from './filter.styled';

export class Filter extends Component {
  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <Form>
        <Label htmlFor="search">Find contacts by name</Label>
        <Input
          type="text"
          id="search"
          value={filter}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
  };