import React from 'react';
import {Image} from 'react-native';

export const MainLogo = () => {
  return (
    <Image
      source={require('./vedantu_logo.png')}
      style={{width: 100, height: 100}}
    />
  );
};

export const CustomImage = ({url, width, height}) => (
  <Image source={{uri: url}} style={{width, height}} />
);
