/* eslint-disable */
import { Container, Grid, Paper } from '@mui/material';
import React,{ Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/preloader/Preloader';
import SideBar from './components/SideBar/SideBar';
import Counter from './components/test/test';
import { initializeTC } from './redux/appReducer';
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

// class App extends React.Component {
//   componentDidMount() {
//     this.props.initializeTC()
//   }
//   render() {
//     if (!this.props.initialized) return <Preloader />
//     return (
//       <BrowserRouter>
//         <div className={`${A.App} ${A.darkTheme}`}>
//           <HeaderContainer />
//           <div className={A.container}>
//             <SideBar />
//             <div className={A.content}>
//               <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
//               <Route path="/dialogs" render={() => <DialogsContainer />} />
//               <Route path="/users" render={() => <UsersContainer />} />
//               <Route path="/login" render={() => <Login />} />
//               <Route path="/test" render={() => <Counter />} />
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   initialized: state.app.initialized,
// })


class App extends React.Component {
  componentDidMount() {
    this.props.initializeTC()
  }
  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <StyledEngineProvider>
        <HashRouter>
          <Container maxWidth='lg'>
            <HeaderContainer />
            <Grid container
              spacing={2}
              direction="row" justifyContent="flex-start"
              alignItems="stretch"
            >
              <Grid className={s.sideBar} item md={2} sm={4} xs={2}>
                <SideBar />
              </Grid>
              <Grid className={s.content}
                item md={10} sm={8} xs={10}
                sx={{ height: '100vh' }} >
                <Paper elevation={1} sx={{ minHeight: '100vh' }}>
                  <Box pt={4}>
                    <Suspense fallback={<div>Загрузка...</div>}>
                      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                      <Route path="/dialogs" render={() => <DialogsContainer />} />
                      <Route path="/users" render={() => <UsersContainer />} />
                      <Route path="/login" render={() => <Login />} />
                      <Route path="/test" render={() => <Counter />} />
                    </Suspense>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </HashRouter >
      </StyledEngineProvider>

    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeTC })(App);
