import React, {Component} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import {MainLogo} from '../../images';
import LoginPageStyles from '../../styles/LoginPageStyles';
import {InputFields, ActionButton} from '../Usables/InputFields';
import {connect} from 'react-redux';
import {
  clearDetails,
  userLogin,
  userLoginError,
  userLoginLoading,
  userLoginSuccess,
} from '../../actions';
import {USER_LOGIN_CLEAR} from '../../constants';
import {emptyObjectData, AndroidToast} from '../../utilities';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.clearDetails(USER_LOGIN_CLEAR);
  }

  setStateValue = (key, value) => {
    this.setState({[key]: value});
  };

  loginUser = () => {
    const {userLogin} = this.props;
    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    if (emptyObjectData(data.username)) {
      AndroidToast('Enter Username');
    } else if (emptyObjectData(data.password)) {
      AndroidToast('Enter password');
    } else {
      userLogin(data);
    }
  };

  render() {
    const {navigation, loginReducer} = this.props;
    return (
      <View style={LoginPageStyles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={LoginPageStyles.loginFormContainer}>
            <View style={LoginPageStyles.logoContainer}>
              <MainLogo />
            </View>
            <View style={LoginPageStyles.loginFieldsContainer}>
              <InputFields
                placeholder={'Username'}
                onChangeText={value => this.setStateValue('username', value)}
              />
              <InputFields
                placeholder={'******'}
                secureTextEntry={true}
                onChangeText={value => this.setStateValue('password', value)}
              />
              <View style={LoginPageStyles.logoContainer}>
                <ActionButton
                  title={'Login'}
                  marginTop={10}
                  onPress={this.loginUser}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});
export default connect(
  mapStateToProps,
  {
    clearDetails,
    userLogin,
    userLoginError,
    userLoginLoading,
    userLoginSuccess,
  },
)(LoginScreen);
