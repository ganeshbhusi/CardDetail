import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomImage} from '../../images';
import {emptyObjectData} from '../../utilities';
import CommonStyles from '../../styles/CommonStyles';
import LoginPageStyles from '../../styles/LoginPageStyles';
import {ActionButton} from '../Usables/InputFields';
import {updateStoreDetails} from '../../actions';
import {FETCH_CARDS_SUCCESS} from '../../constants';

function CardDetailScreen({navigation, route}) {
  const {cardId} = route.params;
  const states = useSelector(state => state);
  const {dataFetchReducer} = states;
  const {cardsData} = dataFetchReducer;
  const dispatch = useDispatch();

  const cardData = cardsData.filter(item => item.id === cardId)[0];
  const hidePage = () => {
    let data = cardsData;
    let indexToUpdate = data.findIndex(
      item => parseInt(item.id) === parseInt(cardId),
    );
    data[indexToUpdate].visible = false;

    dispatch(updateStoreDetails(FETCH_CARDS_SUCCESS, data));
    navigation.pop();
  };
  if (!emptyObjectData(cardData)) {
    const {id, name, details, profile_pic} = cardData;

    return (
      <View style={CommonStyles.singlePageDataContainer}>
        <View style={LoginPageStyles.logoContainer}>
          <CustomImage url={profile_pic} width={100} height={100} />
        </View>
        <View style={CommonStyles.innerCardDetailsView}>
          <Text style={CommonStyles.titleText}>{name}</Text>
          <Text style={CommonStyles.detailsText}>{details}</Text>
        </View>
        <View style={CommonStyles.innerCardDetailsView}>
          <ActionButton
            title={'Hide Me'}
            onPress={hidePage}
            backgroundColor={'red'}
          />
        </View>
      </View>
    );
  } else {
    <View>
      <Text>No Data Found</Text>
    </View>;
  }
}

export default CardDetailScreen;
