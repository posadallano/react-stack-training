import { connect } from 'react-redux';
import { todosIdsSelector } from '@store/selectors/todos';
import Todos from './Todos';

const mapStateToProps = state => ({
  todosIds: todosIdsSelector(state),
});

const enhance = connect(mapStateToProps);

export default enhance(Todos);
