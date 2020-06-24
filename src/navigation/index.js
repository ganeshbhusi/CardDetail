import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/Screens/LoginScreen';
import CardsScreen from '../components/Screens/CardsScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login Page'}}
      />
    </AuthStack.Navigator>
  );
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={CardsScreen} />
    </HomeStack.Navigator>
  );
};

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
      userLoginData: [],
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!this.props.isUserLoggedIn ||
          this.props.isUserLoggedIn === false ||
          this.props.isUserLoggedIn === null ? (
            <Stack.Screen
              name="Auth"
              component={AuthStackScreens}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="Home"
              component={HomeStackScreens}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
