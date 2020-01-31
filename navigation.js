import { Navigation } from 'react-native-navigation';
import ForgotPassword from './screens/ForgotPassword';
import Login from './screens/Login';
import Home from './screens/Home';
import Feed from './screens/Feed';
import Gallery from './screens/Gallery';




Navigation.registerComponent(`Login`, () => Login);
Navigation.registerComponent(`ForgotPassword`, () => ForgotPassword);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Feed`, () => Feed);
Navigation.registerComponent(`Gallery`, () => Gallery);

export const goToLogin = () => Navigation.setRoot({
  root: {

    stack: {
      id: 'stackMain',
      children: [
        {
          component: {
            name: "Login"
          }
        }
      ]
    }

  }
});

const iconColor = 'pink';
const selectedIconColor = '#0089da';

export const goToTabs = (icons, username) => {

  Navigation.setRoot({
    root: {

      bottomTabs: {

        id: 'bottomTabsMain',

        children: [
          {
            component: {
              name: "Home",
              options: {
                bottomTab: {
                  fontSize: 13,
                  text: 'Explore',
                  icon: icons[0],
                  iconColor,
                  selectedIconColor,

                }
              },
              passProps: {
                username
              },

            }
          },

          {
            component: {
              name: "Gallery",
              options: {
                bottomTab: {
                  fontSize: 13,
                  text: 'Create',
                  icon: icons[1],
                  iconColor,
                  selectedIconColor,
                }
              }
            }
          },

          {
            component: {
              name: "Feed",
              options: {
                bottomTab: {
                  fontSize: 13,
                  text: 'Map',
                  icon: icons[2],
                  iconColor,
                  selectedIconColor,
                }
              }
            }
          },
          {
            component: {
              name: "Feed",
              options: {
                bottomTab: {
                  fontSize: 13,
                  text: 'Saved',
                  icon: icons[3],
                  iconColor,
                  selectedIconColor,
                }
              }
            }
          },
          {
            component: {
              name: "Feed",
              options: {
                bottomTab: {
                  fontSize: 13,
                  text: 'Account',
                  icon: icons[4],
                  iconColor,
                  selectedIconColor,
                }
              }
            }
          }

        ]
      }

    }
  })

}