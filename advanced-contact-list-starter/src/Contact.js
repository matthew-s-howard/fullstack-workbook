import React from 'react';
import Button from './Button';

/* eslint max-len: [1, {"ignoreUrls": true}] */


const Contact = props => {
  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
      </div>
      <div className="button-container">
        <Button label="delete" value="delete"
          onClick={() => props.onButtonClick(props._id)} />
      </div>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  _id: React.PropTypes.number,
  avatar: React.PropTypes.string,
  name: React.PropTypes.string,
  occupation: React.PropTypes.string,
  onButtonClick: React.PropTypes.func.isRequired


};
