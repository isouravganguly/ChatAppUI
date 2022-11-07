import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    card:{
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor: "#fafafa",
        borderRadius: 5,
    },

    profile:{
        borderRadius: 25,
        width: 50,
        height: 50,
    },

    info:{
        paddingLeft: 20,
    },

    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

      name:{
        fontSize: 25,
        fontWeight: "300",
      },

      text:{
        fontSize: 18,
        fontWeight: "200",
      }
})

export default styles