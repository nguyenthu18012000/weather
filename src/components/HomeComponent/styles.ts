import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  HomeWeather: {
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 20,
  },
  icon:{
    fontSize:20
  },
  head:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headIcon: {
    flexDirection: "row",
    fontSize: 20
  },
  item:{
    fontSize: 20,
  },
  menu: {
    backgroundColor: '#ffd4ae',
    opacity: 1,
    height: "100%",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  },
  menuItem: {
    marginBottom: 20,
    // paddingBottom: 20,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
    // borderStyle: 'dashed'
  },
  titleMenu: {
    fontSize: 23,
  },
  location: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inforLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 3,
    height: 40
  }
})