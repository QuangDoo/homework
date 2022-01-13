/* eslint-disable react/react-in-jsx-scope */
import {Navigation} from 'react-native-navigation';
import App from '~/App';
import CountryDetailsScreen from '~/screen/CountryDetailsScreen';
import {HomeScreen} from '~/screen/HomeScreen';
import LanguageScreen from '~/screen/LanguageScreen';

Navigation.registerComponent(
  'App',
  () => <App />,
  () => App,
);
Navigation.registerComponent(
  'CountryDetailsScreen',
  () => CountryDetailsScreen,
);
Navigation.registerComponent('LanguageScreen', () => LanguageScreen);

Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'HomeScreen',
              },
            },
            {
              component: {
                name: 'CountryDetailsScreen',
              },
            },
            {
              component: {
                name: 'LanguageScreen',
              },
            },
          ],
        },
      },
    });
  });
});
