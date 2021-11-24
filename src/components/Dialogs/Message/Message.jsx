import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <li className="message">{message}</li>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
