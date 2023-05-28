import React from 'react';
import css from './ContactsList.module.css';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactAction } from 'redux/contacts/contactOperations';

export const ContactsList = () => {
  const contactsList = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleRemoveContact = (id, name) => {
    dispatch(deleteContactAction(id));
    alert(`${name} will be removed from your contacts`);
  };
  const getFilteredList = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const sortedList = getFilteredList().sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const list = sortedList.map(contact => (
    <ContactsListItem
      key={contact.id}
      contact={contact}
      id={contact.id}
      name={contact.name}
      number={contact.number}
      onContactRemove={handleRemoveContact}
      filter={filter}
    />
  ));
  return (
    <>
      {contactsList.length > 0 || (
        <div className={css.empty}>add some contacts</div>
      )}
      {contactsList.length > 0 && <ul className={css.container}>{list}</ul>}
    </>
  );
};
