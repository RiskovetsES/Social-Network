/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.scss';
import { StyledEngineProvider } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { Box } from '@mui/system';
// function SideBar() {
//   return (
//     <nav className={`${S.nav} ${S.darkTheme}`}>
//       <ul className={S.list}>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/dialogs">Messages</NavLink></li>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/profile">Profile</NavLink></li>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/news">News</NavLink></li>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/music">Music</NavLink></li>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/settings">Settings</NavLink></li>
//         <li className={S.list__item}><NavLink activeClassName={S.active} to="/users">Find user</NavLink></li>
//       </ul>
//     </nav>
//   );
// }


function SideBar() {

  return (
    <StyledEngineProvider>
      <Box mt={4} className={s.nav}>
        <ul className={s.list}>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/profile">
              <AccountCircleOutlinedIcon /><span>Profile</span>
            </NavLink>
          </li>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/dialogs">
              <MessageIcon /><span>Messages</span>
            </NavLink>
          </li>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/users">
              <PeopleAltOutlinedIcon /><span>Users</span>
            </NavLink>
          </li>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/news">
              <ImportContactsOutlinedIcon /><span>News</span>
            </NavLink>
          </li>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/music">
              <LibraryMusicOutlinedIcon /><span>Music</span>
            </NavLink>
          </li>
          <li className={s.list__item} >
            <NavLink className={s.list__itemLink} to="/settings">
              <SettingsBrightnessOutlinedIcon /> <span>Settings</span>
            </NavLink>
          </li>

        </ul>
      </Box>
    </StyledEngineProvider>
  );
}



export default SideBar;
