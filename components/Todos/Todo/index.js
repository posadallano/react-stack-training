import { connect } from 'react-redux';
import { makeTodoTextSelector } from '@store/selectors/todos';
import Todo from './Todo';

const makeMapStateToProps = (_, initialProps) => {
  const { id } = initialProps;
  const todoTextSelector = makeTodoTextSelector(id);

  return state => ({
    text: todoTextSelector(state),
  });
};

const enhance = connect(makeMapStateToProps);

export default enhance(Todo);
