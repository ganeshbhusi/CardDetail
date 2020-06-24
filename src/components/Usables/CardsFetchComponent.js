import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {
  fetchCardsData,
  fetchCardsDataError,
  fetchCardsDataLoading,
  fetchCardsDataSuccess,
} from '../../actions';
import {connect} from 'react-redux';
import CardComponent from './CardComponent';

class CardsFetchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.fetchAllCardsData();
  }

  fetchAllCardsData = () => {
    const {loggedInData, fetchCardsData} = this.props;
    let data = {
      userid: loggedInData.userid,
      action: 'fetchAllCards',
    };
    fetchCardsData(data);
  };

  cardDetailScreen = data => {
    const {navigation} = this.props;
    navigation.navigate('CardDetailScreen', {
      cardId: data.id,
    });
  };

  renderItem = ({item}) => {
    if (item.visible) {
      return <CardComponent item={item} onPress={this.cardDetailScreen} />;
    } else {
      return null;
    }
  };
  render() {
    const {cardsDataReducer} = this.props;
    const {
      cardsData,
      cardsDataFailed,
      cardsDataStarted,
      cardsDataSuccess,
    } = cardsDataReducer;
    console.log('cardsDataReducer: ', cardsDataReducer);
    return (
      <View>
        {cardsDataFailed && <Text>Failed to fetch data</Text>}
        {cardsDataStarted && !cardsDataSuccess && !cardsDataFailed && (
          <ActivityIndicator size={'large'} />
        )}
        <FlatList
          data={cardsData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedInData: state.loginReducer.loggedInData,
  cardsDataReducer: state.dataFetchReducer,
});
export default connect(
  mapStateToProps,
  {
    fetchCardsData,
    fetchCardsDataError,
    fetchCardsDataLoading,
    fetchCardsDataSuccess,
  },
)(CardsFetchComponent);
