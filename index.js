/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

YellowBox.ignoreWarnings(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
