// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ContactlistView from './ContactlistView';

export default compose(
  connect(
    state => ({

    }),
    (dispatch, { navigation }) => ({

    }),
  ),
  lifecycle({
    componentDidMount() {

    },
  }),
)(ContactlistView);
