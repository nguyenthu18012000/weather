import { Flex } from "@ant-design/react-native";
import { StyleSheet } from "react-native";

export const styleTodayWeather = StyleSheet.create({
  todayWeatherHeader: {
  },
  cityName: {
    fontSize: 30,
    fontWeight: '300',
    width: 240,
  },
  todayWeatherBody: {
    marginTop: 10,
  },
  date: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '200',
  },
  todayWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  tempWea: {
    paddingRight: 50,
  },
  temperature: {
    fontSize: 50,
  },
  weather: {
    fontSize: 20,
  },
  someContent: {
    marginTop: 20,
    marginBottom: 20,
  },
  todayInforItem: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginTop: 3,
  },
  todayInforImageTitle: {
    flexDirection: 'row',
  },
  todayInforImageBackground: {
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 40,
    height: 40,
    marginLeft: 5, 
    marginRight: 5,
  },
  todayInforImage: {
    width: '100%',
    height: '100%',
    
  },
  title: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  content: {
    marginTop: 10,
    paddingRight: 30,
  }
});
