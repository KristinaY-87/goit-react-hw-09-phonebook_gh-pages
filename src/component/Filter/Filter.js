import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = useCallback(
    e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
    [dispatch],
  );

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
