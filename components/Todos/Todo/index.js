import { connect } from 'react-redux';
import { makeTodoTextSelector, makeTodoDoneSelector } from '@store/selectors/todos';
import { deleteTodo, isDoneTodo } from '@store/actions/todos';
import { compose, withHandlers } from 'recompose';
import Todo from './Todo';

const makeMapStateToProps = (_, initialProps) => {
  const { id } = initialProps;
  const todoTextSelector = makeTodoTextSelector(id);
  const todoDoneSelector = makeTodoDoneSelector(id);

  return state => ({
    text: todoTextSelector(state),
    isDone: todoDoneSelector(state),
  });
};

const mapDispatchToProps = dispatch => ({
  dispatchDeleteTodo: id => dispatch(deleteTodo.request.creator(id)),
  dispatchDoneTodo: payload => dispatch(isDoneTodo.request.creator(payload)),
});

const enhance = compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withHandlers({
    deleteTodo: ({ id, dispatchDeleteTodo }) => () => {
      dispatchDeleteTodo(id);
    },
    doneTodo: ({ id, isDone, dispatchDoneTodo }) => () => {
      dispatchDoneTodo({ id, isDone });
    },
  }),
);


export default enhance(Todo);
