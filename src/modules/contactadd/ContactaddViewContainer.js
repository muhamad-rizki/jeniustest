// @flow
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ContactaddView from './ContactaddView';

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
)(ContactaddView);
