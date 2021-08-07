import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations';
import styles from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContacts = id => dispatch(operations.deleteContact(id));

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <span className={styles.text}>
              {name}: {number}
            </span>

            <button
              className={styles.btn}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
