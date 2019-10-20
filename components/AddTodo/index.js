import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { postTodo } from '@store/actions/todos';
import AddTodo from './AddTodo';

const mapDispatchToProps = dispatch => ({
  dispatchPostTodo: inputValue => dispatch(postTodo.request.creator(inputValue)),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers({ inputValue: '' }, {
    handleInputChange: () => event => ({
      inputValue: event.target.value,
    }),
    addTodo: ({ inputValue }, { dispatchPostTodo }) => () => {
      dispatchPostTodo(inputValue);

      return {
        inputValue: '',
      };
    },
  }),
);

export default enhance(AddTodo);
