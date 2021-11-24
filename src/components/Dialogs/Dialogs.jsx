/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import MessageReduxForm from './MessageForm/MessageForm';
import { Grid } from '@mui/material';

// function Dialogs({ dialogsPage, addMessage }) {
//   const { dialogs, messages } = dialogsPage;
//   const addMessageFunc = ({ messageText }) => {
//     addMessage(messageText)
//   }
//   return (
//     <div className={s.dialogs}>
//       <ul className={s.dialogs__list}>
//         {dialogs.map((d) => (
//           <Dialog
//             name={d.name}
//             id={d.id}
//             key={d.id}
//           />
//         ))}
//       </ul>
//       <ul className={s.messages__list}>
//         {
//           messages.map((m) => (
//             <Message
//               message={m.message}
//               id={m.id}
//               key={m.id}
//             />
//           ))
//         }
//       </ul>
//       <MessageReduxForm onSubmit={addMessageFunc} />
//     </div>
//   );
// }


function Dialogs({ dialogsPage, addMessage }) {
  const { dialogs, messages } = dialogsPage;
  const addMessageFunc = ({ messageText }) => {
    addMessage(messageText)
  }
  return (
    <div >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} sm={2} md={2}>
          <ul className={s.dialogs__list}>
            {dialogs.map((d) => (
              <Dialog
                name={d.name}
                id={d.id}
                key={d.id}
              />
            ))}
          </ul>
        </Grid>
        <Grid item xs={9} sm={10} md={10}>
          <ul className={s.messages__list}>
            {
              messages.map((m) => (
                <Message
                  message={m.message}
                  id={m.id}
                  key={m.id}
                />
              ))
            }
          </ul>
          <MessageReduxForm onSubmit={addMessageFunc} />
        </Grid>
      </Grid>
    </div>
  );
}





Dialogs.propTypes = {
  dialogsPage: PropTypes.shape({
    dialogs: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    messages: PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Dialogs;
