import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { toggleTab } from '@store/actions/tabs';
import TodoTabs from './TodoTabs';

const mapDispatchToProps = dispatch => ({
  dispatchActiveTab: payload => dispatch(toggleTab.request.creator(payload)),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    toggleActiveTab: ({ dispatchActiveTab }) => (event) => {
      dispatchActiveTab(event.target.value);
    },
  }),

);

export default enhance(TodoTabs);
