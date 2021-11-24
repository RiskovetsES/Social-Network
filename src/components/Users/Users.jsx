/* eslint-disable */
import React from 'react';
import User from './User/User';
import axios from 'axios';

const Users = (props) => {
  const { usersPage } = props.usersPage;
  // const getUsers = () => {
  //   if (usersPage.length === 0) {
  //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //       .then(resp => {
  //         props.setUsers(resp.data.items)
  //       })
  //   }
  // }
  const follow = (id) => props.follow(id);
  const unfollow = (id) => props.unfollow(id);
  const result = usersPage.map(user => (
    <User
      data={user}
      follow={follow}
      unfollow={unfollow}
    />
  ));
  return <div>
    {result}
    <button onClick={getUsers}>show more</button>
  </div>
}


export default Users;
