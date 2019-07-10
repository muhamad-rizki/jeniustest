// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ContactlistView from './ContactlistView';
import InvokeHelper from '../../components/InvokeHelper';
import { setLoading, setError, setData } from './ContactlistState';

export default compose(
  connect(
    state => ({
      ...state.contactlist,
    }),
    (dispatch, { navigation }) => ({
      loadContacts: () => {
        dispatch(setLoading(true));
        new InvokeHelper()
          .getContacts()
          .then((response) => {
            dispatch(setData(response.data.data));
            dispatch(setLoading(false));
            dispatch(setError(false));
          })
          .catch((error) => {
            dispatch(setError(error));
            dispatch(setLoading(false));
          });
      }
    }),
  ),
  lifecycle({
    componentDidMount() {
      const { loadContacts } = this.props;
      loadContacts();
    },
  }),
)(ContactlistView);
