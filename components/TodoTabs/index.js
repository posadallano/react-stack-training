import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { toggleTab } from '@store/actions/tabs';
import currentTabSelector from '@store/selectors/currentTab';
import TodoTabs from './TodoTabs';

const mapDispatchToProps = dispatch => ({
  dispatchActiveTab: payload => dispatch(toggleTab.request.creator(payload)),
});

function mapStateToProps(state) {
  return {
    currentState: currentTabSelector(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    toggleActiveTab: ({ dispatchActiveTab }) => (event) => {
      dispatchActiveTab(event.target.value);
    },
  }),

);

export default enhance(TodoTabs);
