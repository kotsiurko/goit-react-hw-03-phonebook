import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // ------------------------------------------------
  // Додав два методи життєвого циклу в цій домашці
  // ------------------------------------------------
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // ------------------------------------------------

  formSubmitHandler = formData => {
    const isInclude = this.state.contacts.some(
      ({ name }) => name === formData.name
    );
    if (isInclude) {
      alert(`${formData.name} is already in your contact list`);
      return;
    }

    this.setState(prevState => {
      // Додаю в стейт нові контакти
      return {
        contacts: [{ id: nanoid(), ...formData }, ...prevState.contacts],
      };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteTodoFromArr = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contactItem => contactItem.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contactItem => {
      return contactItem.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleItems = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook App</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        {contacts.length > 0 ? (
          <Filter filterValue={filter} onChange={this.changeFilter} />
        ) : null}
        {visibleItems.length > 0 ? (
          <ContactList
            contacts={visibleItems}
            deleteTodo={this.deleteTodoFromArr}
          />
        ) : (
          <p>Your contact list is empty</p>
        )}
      </Container>
    );
  }
}
