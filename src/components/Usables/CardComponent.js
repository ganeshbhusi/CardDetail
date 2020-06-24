import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import {CustomImage} from '../../images';

function CardComponent({item, onPress}) {
  const {id, name, details, profile_pic} = item;
  return (
    <TouchableOpacity
      style={CommonStyles.cardStyle}
      onPress={() => onPress(item)}>
      <View style={CommonStyles.dataViewStyle}>
        <CustomImage url={profile_pic} width={80} height={80} />
        <View style={CommonStyles.cardDetailsContainer}>
          <Text style={CommonStyles.titleText}>{name}</Text>
          <Text style={{marginRight: 50}}>{details}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardComponent;
