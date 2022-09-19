import { StyleSheet } from "react-native";

export const styleWeatherInDay = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todayTomorrow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle: {
        marginRight: 10,
        color: 'gray',
    },
    textTitleSelected: {
        marginRight: 10,
        color: 'black',
    },
    hourWeather: {
        width: 50,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20
    },
    nowWeather: {
        width: 50,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20
    },
    hourWeatherItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
    },
    hour: {
        fontSize: 12,
        color: 'gray'
    }
});