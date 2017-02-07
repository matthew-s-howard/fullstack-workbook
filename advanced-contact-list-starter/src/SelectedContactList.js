import React from 'react';
import Contact from './Contact';

/* eslint max-len: [1, {"ignoreUrls": true}] */

const SelectedContactList = props => {
  return (
    <ul className="contact-list"><h3>My Contacts</h3>
      {props.selectedContacts.map(contact => {
        return (
          <Contact {...contact}
            key={contact._id}
            onList={'selected'}
            onButtonClick={index => props.onButtonClick(index)}
            // name={contact.name}
            // avatar={contact.avatar}
            // occupation={contact.occupation}

          />
        );
      })}
    </ul>
  );
};

export default SelectedContactList;

SelectedContactList.propTypes = {
  contacts: React.PropTypes.array,
  selectedContacts: React.PropTypes.array,
  onButtonClick: React.PropTypes.func.isRequired,
  _id: React.PropTypes.number
};
