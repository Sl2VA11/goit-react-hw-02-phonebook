import css from './Contacts.module.css';
// import ContactItem from "./ContactItem";
import React from 'react';

export default function ContactsList({ contacts, deleteContact }) {
  return (
    <ul className={css.ContactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.ContactItem} key={id}>
            <p className={css.userName}>{name}:</p>
            
            <p className={css.userName}> {number}</p>
            <div className={css.btnDeleteWrap}>
              <button className={css.btnDelete} onClick={() => deleteContact(id)}>Delete</button>
            </div>
            
          </li>
        );
      })}
    </ul>
  );
}
