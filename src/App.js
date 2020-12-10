import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleSubmit = (name, number) => {
        const validationError = this.validateContact(name, number);
        if (validationError) {
            this.displayError(validationError);
        } else {
            this.setState(prevState => ({
                contacts: prevState.contacts.concat({
                    name,
                    number,
                    id: uuidv4(),
                }),
            }));
        }
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContacts = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    validateContact = (name, number) => {
        if (name === '' || number === '') {
            return 'Please add contact';
        }

        const { contacts } = this.state;
        const existingContact = contacts.find(contact => contact.name === name);
        if (existingContact) {
            return `${name} is already in contacts!`;
        }
    };

    displayError(error) {
        alert(error);
    }

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };
    render() {
        const { filter } = this.state;

        const visibleContacts = this.getVisibleContacts();

        return (
            <Container>
                <Section title="Phonebook">
                    <ContactForm formSubmitHandler={this.handleSubmit} />
                </Section>
                <Section title="Contacts">
                    <Filter value={filter} onChange={this.changeFilter} />
                    <ContactList
                        contacts={visibleContacts}
                        onDeleteContact={this.deleteContact}
                    />
                </Section>
            </Container>
        );
    }
}

export default App;
