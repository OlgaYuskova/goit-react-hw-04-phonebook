import React from 'react';
import { useState, useEffect } from 'react';
import Filtr from './Filtr/Filtr';
import InputForm from './InputForm/InputForm';
import Contact from './Contacts/Contacts';
import { Section } from './Section/Section.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isContactExist) {
      alert('Contact already exists!');
      return;
    }

    setContacts(prevState => [...prevState, data]);
  };

  const handleChangeSearch = evt => {
    setFilter(evt.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Section>
      <InputForm onSubmit={formSubmitHandler} />
      <Filtr filter={filter} onChange={handleChangeSearch} />
      <Contact
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Section>
  );
};
