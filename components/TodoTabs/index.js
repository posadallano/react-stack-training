import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { toggleTab } from '@store/actions/tabs';
import currentTabSelector from '@store/selectors/currentTab';
import TodoTabs from './TodoTabs';

const mapDispatchToProps = dispatch => ({
  dispatchActiveTab: payload => dispatch(toggleTab.request.creator(payload)),
});

const mapStateToProps = state => ({
  currentState: currentTabSelector(state),
});

const todoTabsHandlers = {
  toggleActiveTab: ({ dispatchActiveTab }) => (event) => {
    dispatchActiveTab(event.target.value);
  },
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(todoTabsHandlers),
);

export default enhance(TodoTabs);
