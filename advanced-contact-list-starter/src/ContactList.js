import React from 'react';
import Contact from './Contact';
/* eslint max-len: [1, {"ignoreUrls": true}] */

const ContactList = props => {
  return (
    <ul className="contact-list"><h3>Global Contacts</h3>
      {props.globalContacts.map(contact => {
        return (
          <Contact {...contact}
            key={contact._id}
            onList={'global'}
            onContactClick={index => props.onContactClick(index)}
            onDeleteButtonClick={index => props.onDeleteButtonClick(index)}
            // name={contact.name}
            // avatar={contact.avatar}
            // occupation={contact.occupation}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  globalContacts: React.PropTypes.array,
  onContactClick: React.PropTypes.func.isRequired,
  onDeleteButtonClick: React.PropTypes.func.isRequired,
  _id: React.PropTypes.number
};
