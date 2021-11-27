/* eslint-disable */
import React from 'react';

const UserContacts = ({title,value = 'not information'}) => {
  return <div>
    <p>
      {title}: {value}
    </p>
  </div>
}

export default UserContacts;
