/* eslint react/prop-types: 0 */
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthComponent from '../../HOC/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

// function Dialogs({ store }) {
//   const { dialogs, messages } = store.state.dialogsPage;
//   return (
//     <ul className={D.dialogs}>
//       <ul className={D.dialogs__list}>
//         {dialogs.map((d) => (
//           <Dialog
//             name={d.name}
//             id={d.id}
//             key={d.id}
//           />
//         ))}
//       </ul>
//       <ul className={D.messages__list}>
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
//     </ul>
//   );
// }

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text) => {
    dispatch(addMessageActionCreator(text));
  },
  onMessageChange: (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  },
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthComponent,
)(Dialogs);
