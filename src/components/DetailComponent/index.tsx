import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from './styles'
import React, { useEffect, useState } from "react";
import Tommorow from "./views/Tomorrow";
import WeekWeather from "./views/WeekWeather";
import Icon from 'react-native-vector-icons/AntDesign'
export default function DetailWeather({ data, navigation }: any) {
  return (
    <View style={styles.DetailWeather}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          style={{ fontSize: 20, marginTop: 5 }}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.textTitle}>Next 7 Days</Text>
        <Text></Text>
      </View>
      <Tommorow data={data[0]} />
      <WeekWeather data={data} />
    </View>
  );
}