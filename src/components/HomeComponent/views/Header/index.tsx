import { View, Text } from 'react-native';
import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { stylesHeader } from './styles';

const Header = () => {
  return (
    <View style={stylesHeader.header}>
      <Text style={stylesHeader.item}>Weather-app</Text>
    </View>
  );
}

export default Header;
