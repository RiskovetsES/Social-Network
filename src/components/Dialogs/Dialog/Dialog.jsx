import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import s from './Dialog.module.scss';

const Dialog = ({ name, id }) => (
  <li className={s.dialogItem}>
    <Avatar>{name}</Avatar>
    <NavLink to={`/dialog/${id}`}>{name}</NavLink>
  </li>
);

Dialog.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Dialog;
