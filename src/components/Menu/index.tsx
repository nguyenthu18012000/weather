import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const Menu = () => {
  const drawer = useRef<any>(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View >
      <Text>I'm in the Drawer!</Text>
    </View>
  );

  return (
     <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View >
        <Button
          title="Open"
          onPress={() => drawer.current.openDrawer()}
        />
        <Text>Menu</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};


export default Menu;