import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: any;
}
const Layout = ({ children }: Props) => {
  const styles = StyleSheet.create({
    container: {

      height: "100%",
      position: "relative"
    },
    linear: {
      flex: 1,
    }
  });
  return (
    <LinearGradient style={styles.linear}
      colors={['#e69042', '#e69042', '#fcd2b3', "#fec283",]} start={{ x: 1, y: 1 }}>
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
}

export default Layout;
