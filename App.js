
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeNav from './screens/HomeNav'
import SearchNav from './screens/SearchNav'
import LibraryNav from './screens/LibraryNav'


const TabNavigator = createBottomTabNavigator(
	{
	Home: HomeNav,
	Search: SearchNav,
  Library: LibraryNav
	},
	{
	initialRouteName: 'Home'
	})

export default createAppContainer(TabNavigator);
