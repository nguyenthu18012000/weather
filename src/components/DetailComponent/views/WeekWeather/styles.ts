import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  weekWeather:{
    marginTop:10,
  },
  weekWeatherItem:{
    paddingLeft:20,
    paddingRight:20,
    width:"100%",
    height:55,
    borderStyle:"solid",
    borderColor:"#fec283",
    // borderWidth:1,
    borderRadius:15,
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  weekWeatherItemTitle:{
    marginTop:15,
    fontWeight:"400",
    fontSize:14,
    color:"#303345"
  },
  tomorowDetailItemIcon:{
    marginTop:10,
    flexDirection:"row"
  },
  tomorowDetailItemIconTitle:{
    marginTop:5,
    fontSize:13,
    marginRight:10
  }
});
