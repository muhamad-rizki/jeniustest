// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ContactaddView from './ContactaddView';
import {
  setContactFirstName,
  setContactLastName,
  setContactAge,
  setContactErrors,
  setContactLoading,
  resetContactAdd,
} from './ContactaddState';
import InvokeHelper from '../../components/InvokeHelper';
import { setData } from '../contactlist/ContactlistState';

export default compose(
  connect(
    state => ({
      ...state.contactadd,
      list: state.contactlist.data,
    }),
    (dispatch, { navigation }) => ({
      navigation,
      setFirstName: text => dispatch(setContactFirstName(text)),
      setLastName: text => dispatch(setContactLastName(text)),
      setAge: text => dispatch(setContactAge(text)),
      submit: (values, edit = false) => {
        let hasError = false;
        Object.keys(values).forEach((key) => {
          const error = {};
          error[key] = 'This field is required!';
          if (values[key] === '') {
            dispatch(setContactErrors(error));
            hasError = true;
          } else {
            error[key] = '';
            dispatch(setContactErrors(error));
          }
        });
        if (hasError) return !hasError;
        dispatch(setContactLoading(true));
        new InvokeHelper()
          .addContact(values)
          .then((response) => {
            if (response.data.message) {
              new InvokeHelper()
                .getContacts()
                .then((nextResponse) => {
                  dispatch(resetContactAdd());
                  dispatch(setContactLoading(false));
                  dispatch(setData(nextResponse.data.data));
                  navigation.goBack();
                })
                .catch((error) => {
                  dispatch(setContactLoading(false));
                  dispatch(setContactErrors({ submit: `Cannot get latest contact! ${error.message}` }));
                });
            } else {
              dispatch(setContactLoading(false));
              dispatch(setContactErrors({ submit: `Cannot ${edit ? 'edit' : 'add'} new contact!` }));
            }
          })
          .catch((error) => {
            dispatch(setContactLoading(false));
            dispatch(setContactErrors({ submit: `Cannot ${edit ? 'edit' : 'add'} new contact! ${error.message}` }));
          });
        return true;
      }
    }),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(ContactaddView);
