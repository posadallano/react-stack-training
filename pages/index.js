import React from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '@store/actions/todos';
import { loadSwitch } from '@store/actions/switch';
import { getIsDarkEnabled } from '@store/selectors/themeSwitch';
import PageWrapper from '@components/PageWrapper';
import AddTodo from '@components/AddTodo';
import Todos from '@components/Todos';
import WelcomeTitle from '@components/WelcomeTitle';
import ThemeSwitch from '@components/ThemeSwitch';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@theme';
import darkTheme from '../darktheme';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    if (isServer) {
      await store.dispatch(loadTodos.request.creator());
      await store.dispatch(loadSwitch.request.creator());
    }

    return { isServer };
  }

  render() {
    const { isDarkThemeEnabled } = this.props;
    return (
      <ThemeProvider theme={isDarkThemeEnabled ? darkTheme : lightTheme}>
        <PageWrapper>
          <ThemeSwitch />
          <WelcomeTitle />
          <AddTodo />
          <Todos />
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  isDarkThemeEnabled: getIsDarkEnabled(state),
});

export default connect(mapStateToProps)(Index);
