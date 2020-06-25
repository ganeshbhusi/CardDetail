import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {fetchCardsData} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import CardComponent from './CardComponent';
import {useNavigation} from '@react-navigation/native';

const CardsFetchComponent = () => {
  const states = useSelector(state => state);
  const {dataFetchReducer, loginReducer} = states;
  const dispatch = useDispatch();
  const {
    cardsData,
    cardsDataFailed,
    cardsDataStarted,
    cardsDataSuccess,
  } = dataFetchReducer;

  const {loggedInData} = loginReducer;

  useEffect(() => {
    let data = {
      userid: loggedInData.userid,
      action: 'fetchAllCards',
    };
    dispatch(fetchCardsData(data));
  }, [dispatch, loggedInData.userid]);
  const navigation = useNavigation();

  const cardDetailScreen = data => {
    navigation.navigate('CardDetailScreen', {
      cardId: data.id,
    });
  };

  const renderItem = ({item}) => {
    if (item.visible) {
      return <CardComponent item={item} onPress={cardDetailScreen} />;
    } else {
      return null;
    }
  };

  return (
    <View>
      {cardsDataFailed && <Text>Failed to fetch data</Text>}
      {cardsDataStarted && !cardsDataSuccess && !cardsDataFailed && (
        <ActivityIndicator size={'large'} />
      )}
      <FlatList
        data={cardsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CardsFetchComponent;
// class CardsFetchComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }
//   componentDidMount() {
//     this.fetchAllCardsData();
//   }

// fetchAllCardsData = () => {
//   const {loggedInData, fetchCardsData} = this.props;
//   let data = {
//     userid: loggedInData.userid,
//     action: 'fetchAllCards',
//   };
//   fetchCardsData(data);
// };

// cardDetailScreen = data => {
//   const {navigation} = this.props;
//   navigation.navigate('CardDetailScreen', {
//     cardId: data.id,
//   });
// };

// renderItem = ({item}) => {
//   if (item.visible) {
//     return <CardComponent item={item} onPress={this.cardDetailScreen} />;
//   } else {
//     return null;
//   }
// };
//   render() {
// const {cardsDataReducer} = this.props;
// const {
//   cardsData,
//   cardsDataFailed,
//   cardsDataStarted,
//   cardsDataSuccess,
// } = cardsDataReducer;
//     return (
// <View>
//   {cardsDataFailed && <Text>Failed to fetch data</Text>}
//   {cardsDataStarted && !cardsDataSuccess && !cardsDataFailed && (
//     <ActivityIndicator size={'large'} />
//   )}
//   <FlatList
//     data={cardsData}
//     renderItem={this.renderItem}
//     keyExtractor={item => item.id.toString()}
//   />
// </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loggedInData: state.loginReducer.loggedInData,
//   cardsDataReducer: state.dataFetchReducer,
// });
// export default connect(
//   mapStateToProps,
//   {
//     fetchCardsData,
//     fetchCardsDataError,
//     fetchCardsDataLoading,
//     fetchCardsDataSuccess,
//   },
// )(CardsFetchComponent);
