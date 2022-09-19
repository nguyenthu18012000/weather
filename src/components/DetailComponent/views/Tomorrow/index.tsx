import { View, Text, Image } from "react-native";
import { styles } from './styles'
import React from "react";
export default function Tommorow(props:any) {
    const {data}=props
    const {day,hour}=data
    return (
        <View style={styles.tomorow}>
            <View style={styles.tomorowHeader}>
                <Text style={{ fontSize: 16, paddingTop: 10,fontWeight:"600" }}>Tommorow</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, paddingTop: 10 }}>{day.avgtemp_c.toFixed(0)} °C</Text>
                    <Image
                        source={{uri:`https:${day.condition.icon}`}}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </View>

            <View style={styles.tomorowDetail}>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("~/assets/iconWeather/sun.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>{day.daily_will_it_rain} cm</Text>
                </View>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("~/assets/iconWeather/wind.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>{hour[0].wind_kph} km/h</Text>
                </View>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("~/assets/iconWeather/sun.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>  {hour[0].humidity} %</Text>
                </View>

            </View>

        </View>
    );
}
