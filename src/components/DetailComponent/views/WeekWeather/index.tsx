import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
const colors = [
    "#faaf80", "#faaf80", "#fdbe8a", "#ffd4ae", "#ffd4ae", "#ffd4ae"
]
export default function WeekWeather(props: any) {
    const { data } = props
    const getDayWeek = (day: string) => {
        const date = new Date(day)
        const nowDay = date.getDay()
        switch (nowDay) {
            case 1:
                return 'MonDay';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thusday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return 'Sunday';
        }
    }
    return (
        <View style={styles.weekWeather}>
            {data.filter((el:any,index:any)=>index!==0).map((el: any, index: number) => (
                <View style={[styles.weekWeatherItem, { backgroundColor: colors[index] }]} key={index}>
                    <Text style={styles.weekWeatherItemTitle}>{getDayWeek(el.date)}</Text>
                    <View style={styles.tomorowDetailItemIcon}>
                        <Text style={styles.tomorowDetailItemIconTitle}>{el.day.avgtemp_c.toFixed(0)} °C</Text>
                        <Image
                            source={{ uri: `https:${el.day.condition.icon}` }}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}
