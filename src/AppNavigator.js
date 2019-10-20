import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Repos from './screens/Repos';
import Favorites from './screens/Favorites';

const RootStack = createStackNavigator({
  Home: {screen: Home},
  Repos: {screen: Repos},
  Favorites: {screen: Favorites},
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
