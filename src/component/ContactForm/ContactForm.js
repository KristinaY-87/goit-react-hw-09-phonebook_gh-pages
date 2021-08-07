import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/operations';
import { getAllContacts } from '../../redux/contacts-selectors';
import styles from './ContactForm.module.css';

const initialFormState = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : contacts.find(contact => contact.number === number)
      ? alert(`${number} is already in contacts`)
      : dispatch(operations.addContact(formData));

    reset();
  };

  const reset = () => {
    setFormData(initialFormState);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            className={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            value={formData.number}
            onChange={handleChange}
            type="tel"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
