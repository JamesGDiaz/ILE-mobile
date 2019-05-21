import React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";
import SlideshowModalScreen from "./SlideshowModalScreen";

class FactibilidadScreen extends React.Component {
  static navigationOptions = {
    title: "Factibilidad de Caso",
    headerStyle: {
      backgroundColor: "#eb975c"
    }
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  hideStatusBar = () => {
    console.log("Hiding StatusBar");
    StatusBar.setHidden(true);
  };

  render() {
    return (
      <View style={styles.containerColumn}>
        <View style={[styles.box, styles.box1]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.props.navigation.navigate("Causales");
            }}
          >
            <View style={styles.touchableContent}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-leaf" size={50} color="#eee" />
              </View>
              <Text style={styles.optionText}>Causales</Text>
            </View>
          </Touchable>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.props.navigation.navigate("Estados");
            }}
          >
            <View style={styles.touchableContent}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../assets/images/mexico.png")}
                  style={{ height: 56, width: 56 }}
                />
              </View>
              <Text style={styles.optionText}>Estados</Text>
            </View>
          </Touchable>
        </View>
        <SlideshowModalScreen
          images={this.props.imageList}
          visible={this.props.modalVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerColumn: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eee",
    borderBottomColor: "#ebebeb"
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee"
  },
  optionIconContainer: {
    flex: 0.2,
    color: "#eee",
    marginHorizontal: 5
  },
  option: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    color: "#eee",
    fontFamily: "quicksand-book",
    fontSize: 26,
    textAlign: "center",
    marginHorizontal: 10,
    textShadowColor: "#222",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15
  },
  touchableContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    flex: 1
  },
  box1: {
    flex: 1,
    backgroundColor: "#efad7f"
  },
  box2: {
    flex: 1,
    backgroundColor: "#f1b890"
  }
});

export default FactibilidadScreen;
