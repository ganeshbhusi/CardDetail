import React from 'react';
import {View} from 'react-native';
import {ActionButton} from '../Usables/InputFields';
import {clearDetails} from '../../actions';
import {useDispatch} from 'react-redux';
import CardsFetchComponent from '../Usables/CardsFetchComponent';
import {USER_LOGOUT} from '../../constants';

const CardsScreen = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(clearDetails(USER_LOGOUT));
  };
  return (
    <View>
      <CardsFetchComponent />
      <ActionButton title={'Logout'} onPress={logoutUser} />
    </View>
  );
};
export default CardsScreen;
// class CardsScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   logoutUser = () => {
//     const {clearDetails} = this.props;
//     clearDetails('USER_LOGOUT');
//   };

//   render() {
//     const {navigation} = this.props;
//     return (
//       <View>
//         <CardsFetchComponent navigation={navigation} />
//         <ActionButton title={'Logout'} onPress={this.logoutUser} />
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loggedInData: state.loginReducer.loggedInData,
// });
// export default connect(
//   mapStateToProps,
//   {clearDetails},
// )(CardsScreen);
