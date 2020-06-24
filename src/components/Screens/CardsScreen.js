import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ActionButton} from '../Usables/InputFields';
import {clearDetails} from '../../actions';
import {connect} from 'react-redux';
import CardsFetchComponent from '../Usables/CardsFetchComponent';

class CardsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  logoutUser = () => {
    const {clearDetails} = this.props;
    clearDetails('USER_LOGOUT');
  };

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <CardsFetchComponent navigation={navigation} />
        <ActionButton title={'Logout'} onPress={this.logoutUser} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedInData: state.loginReducer.loggedInData,
});
export default connect(
  mapStateToProps,
  {clearDetails},
)(CardsScreen);
