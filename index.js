import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import './loadIcons';
import Loading from './screens/Loading';
import SideMenu from './screens/SideMenu';
import Maps from './screens/Maps';
Navigation.registerComponent('Maps',()=>Maps)
Navigation.registerComponent(`Loading`, () => Loading);
Navigation.registerComponent('SideMenu',() => SideMenu)
Navigation.events().registerAppLaunchedListener(() => {

	Navigation.setRoot({
		root: {
		  component: {
		    name: "Loading"
		  },

		}
	});
    
});