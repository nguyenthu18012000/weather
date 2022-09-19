import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  tomorowHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20,
  },
  tomorowDetail:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:70,
    marginRight:70
  },
  tommorowIcon:{
    backgroundColor:"white",
    padding:5,
    width:35,
    borderRadius:16,
    // marginLeft:20
  },
  tomorowDetailItem:{
    // textAlign:"center"
  },
  textTommorow:{
    fontSize:12,
    marginTop:10,
    textAlign:"center",
    fontWeight:"bold",
  },
  tomorow: {
    backgroundColor: "#fee6d2",
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginTop: 20,
    marginBottom:10
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
