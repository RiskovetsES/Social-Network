/* eslint-disable */
import React from 'react';
import User from './User/User';
import s from './UsersC.module.scss';
import { Pagination, Stack } from '@mui/material';
import { Box } from '@mui/system';

// class UsersC extends React.Component {
//   getUsersPage = () => this.props.data.usersPage;
//   getData = () => this.props.data;
//   componentDidMount() {
//     if (this.getUsersPage().length === 0) {
//       const { currentPage, pageSize } = this.getData();
//       this.props.getUsersThunkCreator(currentPage, pageSize)
//     }
//   }
//   onPageChange = (page) => {
//     this.props.setCurrPage(page)
//     this.props.getUsersThunkCreator(page)
//   }

//   follow = (id) => this.props.follow(id);
//   unfollow = (id) => this.props.unfollow(id);
//   result = () => this.getUsersPage().map(user => {
//     return (
//       <User
//         data={user}
//         follow={this.props.followThunckCreator}
//         unfollow={this.props.unfollowThunckCreator}
//       />)
//   });

//   render() {
//     const { totalCount, pageSize, currentPage } = this.props.data
//     const pages = [1, 2, 3, 4, 5];
//     const pageCount = Math.ceil(totalCount / pageSize);
//     return <div>
//       <div>
//         {pages.map(p => <span className={currentPage === p && styles.selected}
//           onClick={() => this.onPageChange(p)}>{p}</span>)}
//       </div>
//       {this.result()}
//       <button onClick={this.getUsers}>show more</button>
//     </div >
//   }
// }
class UsersC extends React.Component {
  getUsersPage = () => this.props.data.usersPage;
  getData = () => this.props.data;
  componentDidMount() {
    if (this.getUsersPage().length === 0) {
      const { currentPage, pageSize } = this.getData();
      this.props.getUsersTC(currentPage, pageSize)
    }
  }
  onPageChange = (page) => {
    this.props.setCurrPage(page)
    this.props.getUsersTC(page)
  }
  follow = (id) => this.props.follow(id);
  unfollow = (id) => this.props.unfollow(id);
  result = () => this.getUsersPage().map(user => {
    //todo: стилизовать карточку
    return (
      <User
        data={user}
        follow={this.props.followTC}
        unfollow={this.props.unfollowTC}
      />)
  });

  // render() {
  //   const { totalCount, pageSize, currentPage } = this.props.data
  //   const pages = [1, 2, 3, 4, 5];
  //   const pageCount = Math.ceil(totalCount / pageSize);
  //   return (
  //     <div className={s.container}>
  //       <div>
  //         {pages.map(p => <span onClick={() => this.onPageChange(p)}>{p}</span>)}
  //       </div>
  //       <ul className={s.list}>
  //         {this.result()}
  //       </ul>
  //     </div>
  //   )
  // }

  render() {
    const { totalCount, pageSize, currentPage } = this.props.data
    const pageCount = Math.ceil(totalCount / pageSize);
    return (
      <Box className={s.container}>
        <Stack spacing={2} mb={2}>
          <Pagination
            className={s.pagination}
            color="primary"
            count={pageCount}
            page={currentPage}
            onChange={(_, page) => this.onPageChange(page)}
          />
        </Stack>
        <ul className={s.list}>
          {this.result()}
        </ul>
      </Box>
    )
  }
}

export default UsersC;
