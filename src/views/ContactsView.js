import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import ContactList from '../component/ContactList';
import ContactForm from '../component/ContactForm';
import Filter from '../component/Filter';
import Section from '../component/Section';
import operations from '../redux/operations';
import { getLoading } from '../redux/contacts-selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        {isLoadingContacts && <h1>download...</h1>}
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
