import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import About from './pages/About';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'ViaCEP'
        }
      },
      About: {
        screen: About,
        navigationOptions: {
          title: 'Sobre ViaCEP'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#357628'
        },
        headerTintColor: '#fff'
      }
    }
  )
);

export default Routes;
