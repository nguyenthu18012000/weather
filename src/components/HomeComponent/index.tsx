import React, { useEffect, useState, useRef } from "react";
import { Button, DrawerLayoutAndroid, Text, View, Image, TextInput, Pressable } from "react-native";
import WeatherServices from "../../services/weather";
import Loading from "../common/loading";
import { style } from "./styles";
import TodayWeather from "./views/TodayWeather";
import WeatherInDay from "./views/WeatherInDay";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import storage from "../../helpers/storage";
import Minus from 'react-native-vector-icons/Feather';
import DotSingle from 'react-native-vector-icons/Entypo';
import { PermissionsAndroid } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";


type Props = {
    navigation: any;
};

const HomeComponent = ({ navigation }: Props) => {
    const [location, setLocation] = useState<any>();
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [currentLocation, setCurrentLocation] = useState<any>('Hanoi');
    const [listLocation, setListLocation] = useState<any[]>([]);
    const [dataListLocation, setDataListLocation] = useState<any[]>([]);
    const [dataCurrentWeather, setDataCurrentWeather] = useState<any>();
    const [dataTodayWeather, setDataTodayWeather] = useState<any>({});
    const [dataTomorrowWeather, setDataTomorrowWeather] = useState<any>({});
    const [dataNext7DaysWeather, setDataNext7DaysWeather] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [newLocation, setNewLocation] = useState<string>('');
    const drawer = useRef<any>(null);

    const storageListLocations = (listLocation: any[]) => {
        const listLocationString = listLocation.toString();
        storage.storeData('listLocation', listLocationString);
    }

    const getListLocation = () => {
        storage
        .getData('listLocation')
        .then(r => {
            let listLocation = r?.split(',') || [];
            setListLocation(listLocation);
        });
    }

    const handleAddNewLocation = () => {
        if (newLocation !== ''
        && !listLocation.find(item => item.toUpperCase() === newLocation.toUpperCase())) {
            if (listLocation.length === 0) {
                setListLocation([currentLocation, newLocation]);
                storageListLocations([currentLocation, newLocation]);
            } else {
                setListLocation([...listLocation, newLocation]);
                storageListLocations([...listLocation, newLocation]);
            }
            setNewLocation('');
        } else {
            setNewLocation('');
        }
    }

    const handleSelectLocation = (location: string) => {
        setCurrentLocation(location);
    }
    
    const getDataWeather = (currentLocation: string, days: number) => {
        WeatherServices.getDataWeather(
            {
                location: currentLocation || 'HaNoi',
                days: days || 8,
            },
            (data) => {
                setLocation(data?.data?.location);
                setDataCurrentWeather(data?.data?.current);
                setDataTodayWeather(data?.data?.forecast?.forecastday[0]);
                setDataTomorrowWeather(data?.data?.forecast?.forecastday[1]);
                const next7Days = data?.data?.forecast?.forecastday.slice(1);
                setDataNext7DaysWeather(next7Days);
                setIsLoading(false);
            },
            () => { }
        )
    // fetch('http://api.weatherapi.com/v1/forecast.json?key=4a1daaa108484c67bb424252221309&q=HaNoi&days=7&aqi=no&alerts=no')
    // .then((response) => {response.json().then(res => console.log('res===', res));})
    // .then((json) => {
    //   console.log('aaaaaaaaa', json);
    // })
    // .catch((error) => {
    //   console.error("2222",error);
    // });
    }

    const getDataEachLocation = (location: string) => {
        WeatherServices.getDataWeather(
            {
                location: location,
                days: 1,
            },
            (data) => {
                const dataLocation = dataListLocation.find((item: any) =>
                    item.name.toUpperCase() == data?.data?.location?.name.toUpperCase()
                );
                if (dataLocation) {
                    dataLocation.name = data?.data?.location?.name,
                        dataLocation.temp = data?.data?.current?.temp_c,
                        dataLocation.icon = data?.data?.current?.condition?.icon
                } else {
                    setDataListLocation(
                        [...dataListLocation,
                        {
                            name: data?.data?.location?.name,
                            temp: data?.data?.current?.temp_c,
                            icon: data?.data?.current?.condition?.icon
                        }]
                    );
                }
            },
            () => { }
        )
    }

    const getDataLocations = () => {
        listLocation.forEach((location: any) => getDataEachLocation(location));
    }

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message:
                        "We needs access to your location ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
              } else {
                console.log("Location permission denied");
              }
        } catch (err) {
            console.warn(err);
        }
    };

    const getCurrentLocation = async () => {
        
        try {
            Geolocation.getCurrentPosition(
                (position) => {
                  setCurrentLocation(position.coords.latitude + ',' + position.coords.longitude)
                },
                (error) => {
                  // See error code charts below.
                  console.log('3',error.code, error.message);
                  setCurrentLocation('Hanoi')
                },
                { enableHighAccuracy: true, timeout: 15000}
            );
        } catch (error) {
            console.log('loi ===', error)
        }
    }

    useEffect(() => {
        getDataWeather(currentLocation, 8);
        getDataLocations();
    }, [listLocation, currentLocation])

    useEffect(() => {
        getListLocation();
        PermissionsAndroid.check('android.permission.ACCESS_FINE_LOCATION')
        .then((res) => {
            if (!res) {
                requestLocationPermission();
            } else {
                getCurrentLocation();
            }
        });
    }, [])

    const navigationView = () => (
        <View style={style.menu}>
            <View style={style.menuItem}>
                <Text style={style.titleMenu}>
                    <AntDesign name='staro' style={{ fontSize: 20 }} />
                    &nbsp;Current location
                </Text>
                <View style={style.location}>
                    <Text style={{ fontSize: 18 }}>{location?.name}</Text>
                    <View style={style.inforLocation}>
                        <Image
                            source={{ uri: `http:${dataCurrentWeather?.condition?.icon}` }}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={{ fontSize: 18 }}>{dataCurrentWeather?.temp_c}°C</Text>
                    </View>
                </View>
            </View>
            <View style={style.menuItem}>
                <Text style={style.titleMenu}>
                    <EvilIcons name='location' style={{ fontSize: 20 }} />
                    &nbsp;Other location
                </Text>
                {
                    dataListLocation
                    .filter((item: any) => item.name.toUpperCase() !== currentLocation.toUpperCase())
                    .map((location: any, key: number) => (
                        <Pressable
                            key={key++} style={style.location}
                            onPress={() => handleSelectLocation(location?.name)}
                        >
                            <Text style={{ fontSize: 18 }}>{location?.name}</Text>
                            <View style={style.inforLocation}>
                                <Image
                                    source={{ uri: `http:${location?.icon}` }}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={{ fontSize: 18 }}>{location?.temp}°C</Text>
                            </View>
                        </Pressable>
                    ))
                }
            </View>
            <View>
                <TextInput
                    style={style.input}
                    value={newLocation}
                    placeholder='Nhập vị trí mới'
                    onChangeText={(newText: string) => setNewLocation(newText)}
                />
                <Button
                    title='ADD'
                    color='#faaf80'
                    onPress={handleAddNewLocation}
                />
            </View>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={350}
            drawerPosition="left"
            renderNavigationView={navigationView}
            onDrawerOpen={() =>setIsOpen(true)}
            onDrawerClose={() =>setIsOpen(false)}
        >
            <View style={style.HomeWeather}>
                <View style={style.head}>
                    <Text></Text>
                    {!isOpen?<View style={style.headIcon}>
                    <DotSingle style={{fontSize: 25,paddingTop:12}} name="dot-single"/>
                    <Minus style={{fontSize: 50}}  name="minus"/>
                    </View>:<View style={style.headIcon}>
                    <Minus style={{fontSize: 50}}  name="minus"/>
                    <DotSingle style={{fontSize: 25,paddingTop:12}} name="dot-single"/>
                    </View>}
                    <Text></Text>
                </View>
                {
                    isLoading
                        ? <Loading />
                        : <>
                            <TodayWeather location={location} currentWeather={dataCurrentWeather} />
                            <WeatherInDay
                                now={location?.localtime}
                                dataTodayWeather={dataTodayWeather}
                                dataTomorrowWeather={dataTomorrowWeather}
                                dataNext7DaysWeather={dataNext7DaysWeather}
                                navigation={navigation}
                            />
                        </>
                }
            </View>
        </DrawerLayoutAndroid>
    );
}

export default HomeComponent;
