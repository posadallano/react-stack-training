import { compose, withStateHandlers } from 'recompose';
import ThemeSwitch from './ThemeSwitch';

const enhance = compose(
  withStateHandlers({ isToggleOn: true }, {
    SwitchButton: ({ isToggleOn }) => () => ({
      isToggleOn: !isToggleOn,
    }),
  }),
);

export default enhance(ThemeSwitch);
