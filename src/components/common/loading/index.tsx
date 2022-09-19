import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={{marginTop: 250}}>
      <ActivityIndicator size="large" color="#e69042" />
    </View>
  );
}

export default Loading;
