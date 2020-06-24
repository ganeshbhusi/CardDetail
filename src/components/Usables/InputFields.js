import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LoginPageStyles from '../../styles/LoginPageStyles';
import CommonStyles from '../../styles/CommonStyles';

export const InputFields = ({
  logoName,
  placeholder,
  secureTextEntry = false,
  onChangeText,
}) => {
  return (
    <View style={LoginPageStyles.inputContainer}>
      <TextInput
        style={LoginPageStyles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const ActionButton = ({
  title = 'None',
  marginTop = 0,
  backgroundColor = 'green',
  onPress,
}) => (
  <TouchableOpacity
    style={[CommonStyles.ActionButton, {marginTop, backgroundColor}]}
    onPress={onPress}>
    <Text style={CommonStyles.buttonColor}>{title}</Text>
  </TouchableOpacity>
);
