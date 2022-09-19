import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign:"center"
  },
  item: {
    fontSize: 20
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    height:300
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});
