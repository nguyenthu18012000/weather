import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { createStackNavigator } from '@react-navigation/stack';

// Geolocation.setRNConfiguration(config);
const Stack = createStackNavigator();

const Route = () => {
  const [dataNext7Days, setDataNext7Days] = useState<any[]>([]);

  const getDataNext7Days = (data: any[]) => {
    setDataNext7Days(data);
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Detail" options={{ headerShown: false }}>
            {(dataNext7DaysWeather) => <Detail someData={dataNext7DaysWeather}/>}
          </Stack.Screen> */}
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route;
