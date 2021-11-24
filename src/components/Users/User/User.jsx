/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './User.module.scss'
import avatar from '../../../assets/images/avatar.png'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import Paper from "@mui/material/Paper";


// const User = ({ data, follow, unfollow }) => {
//   const { id, followed, photos, status, name } = data;

//   return <li
//     className={styles.person__Info}>

//     <div className={styles.person__avaBlock}>
//       <NavLink to={'/profile/' + id}>
//         <img src={photos.small ? photos.small : avatar} alt="img" width="150" height="150" />
//       </NavLink>
//       {followed ? <button onClick={() => {
//         unfollow(id);
//       }} className>unfollow</button> :
//         <button onClick={() => {
//           follow(id);
//         }}>follow</button>}
//     </div>

//     <div className={styles.person__nameLocationBlock}>
//       <div className={styles.person__row}>
//         <p>{name}</p>
//         <div className={styles.person__locationWrapper}>
//         </div>
//       </div>
//       <p>{status}</p>
//     </div>
//   </li>
// };


const User = ({ data, follow, unfollow }) => {
  const { id, followed, photos, status, name } = data;
  return <li className={s.item}>
    <Paper className={s.paper}>
      <div className={s.ava__block}>
        <NavLink className={s.ava} to={'/profile/' + id}>
          <img src={photos.small ? photos.small : avatar} alt="img" width="150" height="150" />
        </NavLink>
        {followed ? <Button className={s.btn} variant="text" onClick={() => {
          unfollow(id);
        }} className>unfollow</Button> :
          <Button className={s.btn} variant="text" onClick={() => {
            follow(id);
          }}>follow</Button>}
      </div>
      <div className={s.info}>
        <div>
          <p>Name: {name}</p>
        </div>
        <p>Status: {status}</p>
      </div>
    </Paper>
  </li>
};





export default User;
