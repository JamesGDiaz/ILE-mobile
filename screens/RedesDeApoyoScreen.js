import React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";
import SlideshowModalScreen from "./SlideshowModalScreen";
import { CacheManager } from "react-native-expo-image-cache";
import { connect } from "react-redux";
import { setImageList, setModalVisible } from "../actions/connectionActions";

const uris = [
  [
    //when the user presses
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F3.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F5.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F6.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMarie%20Stopes%2F7.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FDDSER%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FDDSER%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FDDSER%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20ILE%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20ILE%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20ILE%2F3.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20ILE%2F4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20ILE%2F5.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCentro%20M%C3%A9dico%20Mujer%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCentro%20M%C3%A9dico%20Mujer%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCentro%20M%C3%A9dico%20Mujer%2F3.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCentro%20M%C3%A9dico%20Mujer%2F4.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20Naiset%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20Naiset%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20Naiset%2F3.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20Naiset%2F4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFundaci%C3%B3n%20Naiset%2F5.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMusas%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMusas%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FMusas%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FAdivac%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FAdivac%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FAdivac%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FGire%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FGire%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FGire%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFondo%20Maria%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFondo%20Maria%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FFondo%20Maria%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FIPAS%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FIPAS%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FIPAS%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCat%C3%B3licas%20por%20el%20derecho%20a%20decidir%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCat%C3%B3licas%20por%20el%20derecho%20a%20decidir%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FCat%C3%B3licas%20por%20el%20derecho%20a%20decidir%2F3.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FLaboratorios%2F30.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FLaboratorios%2F31.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Redes%20de%20apoyo%2FLaboratorios%2F32.jpg?alt=media"
  ]
];

class RedesScreen extends React.Component {
  static navigationOptions = {
    title: "Redes de Apoyo",
    headerStyle: {
      backgroundColor: "#28e4a4"
    }
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  showSlideshowComponent(uris) {
    //this.clearCache()
    console.log("Hiding StatusBar...");
    StatusBar.setHidden(true);
    this.props.setImageList(uris);
    this.props.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.containerColumn}>
        <View style={[styles.containerRow, { flex: 1.2 }]}>
          <View style={[styles.box, styles.box1]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[0]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/mariestopes.png")}
                    style={{ height: 36, width: 25 }}
                  />
                </View>
                <Text style={styles.optionText}>Marie Stopes</Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[1]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/ddser.png")}
                    style={{ height: 42, width: 120 }}
                  />
                </View>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={[styles.containerRow, { flex: 1.2 }]}>
          <View style={[styles.box, styles.box3]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[2]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/fundacionile.png")}
                    style={{ height: 36, width: 55 }}
                  />
                </View>
                <Text style={styles.optionText}>Fundación ILE</Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box4]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[3]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/centromedicomujer.png")}
                    style={{ height: 36, width: 40 }}
                  />
                </View>
                <Text style={styles.optionText}>Centro Médico Mujer</Text>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={[styles.containerRow, { flex: 1.2 }]}>
          <View style={[styles.box, styles.box5]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[4]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/fundacionnaiset.png")}
                    style={{ height: 36, width: 40 }}
                  />
                </View>
                <Text style={styles.optionText}>Fundación Naiset</Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box6]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[5]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/musas.png")}
                    style={{ height: 36, width: 36 }}
                  />
                </View>
                <Text style={styles.optionText}>Musas</Text>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={[styles.box, styles.box7]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[6]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/adivac.png")}
                    style={{ height: 36, width: 40 }}
                  />
                </View>
                <Text style={styles.optionText}>Adivac</Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box8]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[7]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/gire.png")}
                    style={{ height: 44, width: 120 }}
                  />
                </View>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={[styles.containerRow, { flex: 1.2 }]}>
          <View style={[styles.box, styles.box9]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[8]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/fondomaria.png")}
                    style={{ height: 52, width: 114 }}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box10]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[9]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/ipas.png")}
                    style={{ height: 64, width: 64 }}
                  />
                </View>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={[styles.containerRow, { flex: 1.2 }]}>
          <View style={[styles.box, styles.box11]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[10]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require("../assets/redes_apoyo/icons/catolicasxdad.png")}
                    style={{ height: 64, width: 104 }}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box12]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple("#ccc", false)}
              onPress={() => {
                this.showSlideshowComponent(uris[11]);
              }}
            >
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="ios-flask" size={36} color="#eee" />
                </View>
                <Text style={styles.optionText}>Laboratorios</Text>
              </View>
            </Touchable>
          </View>
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
    alignItems: "center",
    justifyContent: "center"
  },
  option: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    color: "#eee",
    fontFamily: "quicksand-book",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 6,
    marginTop: 12,
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
    backgroundColor: "#39e6ac"
  },
  box2: {
    flex: 1,
    backgroundColor: "#90f1d0"
  },
  box3: {
    flex: 1,
    backgroundColor: "#4be8b3"
  },
  box4: {
    flex: 1,
    backgroundColor: "#7fefc9"
  },
  box5: {
    flex: 1,
    backgroundColor: "#5cebba"
  },
  box6: {
    flex: 1,
    backgroundColor: "#6eedc2"
  },
  box7: {
    flex: 1,
    backgroundColor: "#6eedc2"
  },
  box8: {
    flex: 1,
    backgroundColor: "#5cebba"
  },
  box9: {
    flex: 1,
    backgroundColor: "#7fefc9"
  },
  box10: {
    flex: 1,
    backgroundColor: "#4be8b3"
  },
  box11: {
    flex: 1,
    backgroundColor: "#90f1d0"
  },
  box12: {
    flex: 1,
    backgroundColor: "#39e6ac"
  }
});

const mapStateToProps = state => {
  return {
    imageList: state.imageList,
    modalVisible: state.modalVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageList: uris => {
      dispatch(setImageList(uris));
    },
    setModalVisible: modalVisible => {
      dispatch(setModalVisible(modalVisible));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedesScreen);
