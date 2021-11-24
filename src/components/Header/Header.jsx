/* eslint-disable */
import React from 'react';
import s from './Header.module.scss';
import AppBar from '@mui/material/AppBar';
import { Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
// export default function Header({ data }) {
//   return (
//     <header className={`${s.main} ${s.darkTheme}`}>
//       <div className={`${s.wrapper}`}>
//         <img src="/" alt="logo" width="50" height="50" />
//         <h2>{data.isAuth ? data.data.login : 'Login'}</h2>
//       </div>
//     </header >

//   );
// }


export default function Header({ isAuth, login, logoutTC }) {
  return (
    <>
      <StyledEngineProvider>
        <AppBar className={s.appBar}>
          <Toolbar className={s.toolBar}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* <img src="/" alt="logo" width="50" height="50" /> */}
              <p className={s.logoBig}>Big logo</p>
              <p className={s.logoSmal}>logo</p>
            </Typography>
            <div>
              {isAuth ?
                <div>{login} - <button onClick={logoutTC}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
          </Toolbar>

        </AppBar>
        <Toolbar className={s.fakeToolBar}> </Toolbar>
      </StyledEngineProvider>
    </>
  );
}
