import { connect } from 'react-redux';
import { makeTodoTextSelector } from '@store/selectors/todos';
import { deleteTodo } from '@store/actions/todos';
import { compose, withHandlers } from 'recompose';
import Todo from './Todo';

const makeMapStateToProps = (_, initialProps) => {
  const { id } = initialProps;
  const todoTextSelector = makeTodoTextSelector(id);

  return state => ({
    text: todoTextSelector(state),
  });
};

const mapDispatchToProps = dispatch => ({
  dispatchDeleteTodo: id => dispatch(deleteTodo.request.creator(id)),
});

const enhance = compose(
  connect(makeMapStateToProps, mapDispatchToProps),
  withHandlers({
    deleteTodo: ({ id, dispatchDeleteTodo }) => () => {
      dispatchDeleteTodo(id);
    },
  }),
);


export default enhance(Todo);
