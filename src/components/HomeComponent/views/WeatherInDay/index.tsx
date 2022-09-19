import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styleWeatherInDay } from './styles';

type Props = {
  now: any;
  dataTodayWeather: any;
  dataTomorrowWeather: any;
  navigation: any;
  dataNext7DaysWeather: any[];
};

const WeatherInDay = ({
  now,
  dataTodayWeather,
  dataTomorrowWeather,
  navigation,
  dataNext7DaysWeather
}: Props) => {
  const [isToday, setIsToday] = useState<boolean>(true);
  const [offsetCsroll, setOffsetScroll] = useState<number>(0);
  const widthPerHourItem = 60;

  const selectDay = (status: boolean) => {
    if (status) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  }
  const getHour = (dateTime: string) => {
    const time = dateTime.slice(11);
    return time;
  }

  const setOffset = () => {
    const time = parseInt(now.slice(11, 13));
    setOffsetScroll(time * widthPerHourItem - 30);
  }

  useEffect(() => {
    setOffset();
  }, [])

  return (
    <View>
      <View style={styleWeatherInDay.title}>
        <View style={styleWeatherInDay.todayTomorrow}>
          <Text
            style={isToday ? styleWeatherInDay.textTitleSelected : styleWeatherInDay.textTitle}
            onPress={() => selectDay(true)}
          >
            Today
          </Text>
          <Text
            style={!isToday ? styleWeatherInDay.textTitleSelected : styleWeatherInDay.textTitle}
            onPress={() => selectDay(false)}
          >
            Tomorrow
          </Text>
        </View>
        <Text
          style={styleWeatherInDay.textTitle}
          onPress={() => navigation.navigate('Detail', { dataNext7DaysWeather: dataNext7DaysWeather })}
        >
          Next 7 days
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentOffset={{x: offsetCsroll, y: 0}}
      >
        {(isToday ? dataTodayWeather : dataTomorrowWeather)?.hour?.map((hour: any, key: number) => (
          <View
            style={(getHour(hour?.time).includes(now.slice(11, 13)) && isToday)
              ? styleWeatherInDay.nowWeather
              : styleWeatherInDay.hourWeather}
            key={key++}
          >
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Text
                style={styleWeatherInDay.hour}
              >
                {(getHour(hour?.time).includes(now.slice(11, 13)) && isToday) ? 'now' : getHour(hour?.time)}
              </Text>
            </View>
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Image
                source={{ uri: `https:${hour?.condition?.icon}` }}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Text>{hour?.temp_c.toFixed(0)}°</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default WeatherInDay;
