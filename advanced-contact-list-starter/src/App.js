import React, { Component } from 'react';
import ContactList from './ContactList';
import SelectedContactList from './SelectedContactList';
import SearchBar from './SearchBar';
import ContactForm from './ContactForm';
import axios from 'axios';
/* eslint max-len: [1, {"ignoreUrls": true}] */
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      contacts: [], // from axios
      globalContacts: [],
      selectedContacts: [] // ids only
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/contacts')
    .then(resp => {
      this.setState({
        contacts: resp.data,
        globalContacts: resp.data
      });
    });
    // .catch(err => console.log(`Error! ${err}`));
  }
  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  getFilteredContacts() {

    const term = this.state.searchText.trim().toLowerCase();
    return this.state.globalContacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(term) >= 0;
    });
  }

  getSelectedContacts() {
    return this.state.selectedContacts;
  }

  handleDeleteClick(index) {
    this.setState({
      selectedContacts: this.state.selectedContacts.filter(contact => contact._id !== index)
    });
  }
  handleContactClick(index) {
    this.setState({
      selectedContacts: this.state.selectedContacts.concat(this.state.globalContacts.filter(contact => contact._id === index)),
      globalContacts: this.state.globalContacts.filter(contact => contact._id !== index)
    });
  // console.log('did we fire?');
  }
  handleAddContact(attributes) {
    axios.post('http://localhost:4000/contacts', attributes)
      .then(resp => {
        this.setState({
          contacts: [...this.state.contacts, resp.data],
          globalContacts: [...this.state.globalContacts, resp.data]
        });
      });
  //    .catch(err => console.log(err));
  }
  handleDeleteButtonClick(_id) {
    axios.delete(`http://localhost:4000/contacts/${_id}`)
      .then(resp => {
        const newContacts = this.state.contacts.filter(contact => contact._id !== _id);

        this.setState({
          contacts: newContacts
        });
      })
      .catch(err => console.log(`ERROR! ${err}`));
  }
  render() {
    return (
      <div className="App">
        <h1>Contact List</h1>
        <SearchBar value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)} />
        <ContactForm onSubmit={this.handleAddContact.bind(this)} />
        <SelectedContactList
          selectedContacts={this.getSelectedContacts()}
          onContactClick={this.handleContactClick.bind(this)}
          onButtonClick={this.handleDeleteClick.bind(this)}
          onList={'selected'} />
        <ContactList globalContacts={this.getFilteredContacts()}
          onContactClick={this.handleContactClick.bind(this)}
          onDeleteButtonClick={this.handleDeleteButtonClick.bind(this)} />
      </div>
    );
  }
}

export default App;
