import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { toggleSwitch } from '@store/actions/todos';
import ThemeSwitch from './ThemeSwitch';

const mapDispatchToProps = dispatch => ({
  dispatchToggleSwitch: isDarkThemeEnabled => dispatch(toggleSwitch.creator(isDarkThemeEnabled)),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  // initialState
  withStateHandlers({ isDarkThemeEnabled: false }, {
    // stateUpdaters
    SwitchButton: ({ isDarkThemeEnabled }) => () => ({
      isDarkThemeEnabled: !isDarkThemeEnabled,
    }),
    toggleSwitch: ({ isDarkThemeEnabled }, { dispatchToggleSwitch }) => () => {
      dispatchToggleSwitch(isDarkThemeEnabled);
    },
  }),
);

export default enhance(ThemeSwitch);
