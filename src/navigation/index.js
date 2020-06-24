import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/Screens/LoginScreen';
import CardsScreen from '../components/Screens/CardsScreen';
import {connect} from 'react-redux';
import CardDetailScreen from '../components/Screens/CardDetailScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'User Login'}}
      />
    </AuthStack.Navigator>
  );
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={CardsScreen} />
      <HomeStack.Screen name="CardDetailScreen" component={CardDetailScreen} />
    </HomeStack.Navigator>
  );
};

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

const mapStateToProps = state => ({
  isUserLoggedIn: state.loginReducer.isUserLoggedIn,
});
export default connect(
  mapStateToProps,
  null,
)(Navigation);
