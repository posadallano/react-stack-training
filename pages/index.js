import React from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '@store/actions/todos';
import PageWrapper from '@components/PageWrapper';
import AddTodo from '@components/AddTodo';
import Todos from '@components/Todos';
import WelcomeTitle from '@components/WelcomeTitle';
import ThemeSwitch from '@components/ThemeSwitch';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    if (isServer) {
      await store.dispatch(loadTodos.request.creator());
    }

    return { isServer };
  }

  render() {
    return (
      <PageWrapper>
        <ThemeSwitch />
        <WelcomeTitle />
        <AddTodo />
        <Todos />
      </PageWrapper>
    );
  }
}

export default connect()(Index);
