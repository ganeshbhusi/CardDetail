import {StyleSheet} from 'react-native';

const LoginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  logoContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    shadowColor: 'silver',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  inputContainer: {
    borderBottomWidth: 1,
    // height: 40,
  },
  textInput: {
    fontSize: 16,
    paddingLeft: 10,
  },
  loginFieldsContainer: {
    marginTop: 15,
  },
});

export default LoginPageStyles;
