import React from 'react';
import Contact from './Contact';
/* eslint max-len: [1, {"ignoreUrls": true}] */

const ContactList = props => {
  return (
    <ul className="contact-list">
      {props.contacts.map(contact => {
        return (
          <Contact {...contact}
            key={contact._id}
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

export default ContactList;

ContactList.propTypes = {
  contacts: React.PropTypes.array,
  onButtonClick: React.PropTypes.func.isRequired,
  _id: React.PropTypes.number
};
