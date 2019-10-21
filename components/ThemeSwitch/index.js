import { connect } from 'react-redux';
import { toggleSwitch } from '@store/actions/todos';
import ThemeSwitch from './ThemeSwitch';
import { getIsDarkEnabled } from '../../store/selectors/themeSwitch';

const mapDispatchToProps = dispatch => ({
  dispatchSwitch: () => dispatch(toggleSwitch),
});

function mapStateToProps(state) {
  return { isDarkThemeEnabled: getIsDarkEnabled(state) };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ThemeSwitch);
