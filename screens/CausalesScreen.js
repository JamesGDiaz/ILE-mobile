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
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FCausas%20econ%C3%B3micas%20graves%2F22.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FCausas%20econ%C3%B3micas%20graves%2F23.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FGrave%20da%C3%B1o%20a%20la%20salud%2F28.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FGrave%20da%C3%B1o%20a%20la%20salud%2F29.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FImprudencial%20o%20culposo%2F6.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FImprudencial%20o%20culposo%2F7.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FInseminaci%C3%B3n%20artificial%20forzada%20o%20no%20autorizada%2F30.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FInseminaci%C3%B3n%20artificial%20forzada%20o%20no%20autorizada%2F31.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FA.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FB.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FC.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FD.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FE.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FF.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FG.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FH.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FI.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FJ.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FK.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FL.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FMalformaciones%20o%20alteraciones%20cong%C3%A9nitas%2FM.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FPeligro%20de%20muerte%2F32.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FPeligro%20de%20muerte%2F33.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FPeligro%20de%20muerte%2F34.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FViolaci%C3%B3n%2F4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FViolaci%C3%B3n%2F5.jpg?alt=media"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FVoluntad%20de%20la%20mujer%2F24.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FVoluntad%20de%20la%20mujer%2F25.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20caso%2FCausales%2FVoluntad%20de%20la%20mujer%2F26.jpg?alt=media"
  ]
];

class CausalesScreen extends React.Component {
  static navigationOptions = {
    title: "Causales",
    headerStyle: {
      backgroundColor: "#e57529"
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
        <View style={[styles.box, styles.box1]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.showSlideshowComponent(uris[0]);
            }}
          >
            <View style={styles.touchableContent}>
              <Text style={styles.optionText}>Causas Económicas Graves</Text>
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
              <Text style={styles.optionText}>Grave Daño a la Salud</Text>
            </View>
          </Touchable>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.showSlideshowComponent(uris[2]);
            }}
          >
            <View style={styles.touchableContent}>
              <Text style={styles.optionText}>Imprudencial o Culposo</Text>
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
              <Text style={styles.optionText}>
                Inseminación Artifical Forzada o No Autorizada
              </Text>
            </View>
          </Touchable>
        </View>
        <View style={[styles.box, styles.box5]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.showSlideshowComponent(uris[4]);
            }}
          >
            <View style={styles.touchableContent}>
              <Text style={styles.optionText}>
                Malformaciones o Alteraciones Congénitas
              </Text>
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
              <Text style={styles.optionText}>Peligro de Muerte</Text>
            </View>
          </Touchable>
        </View>
        <View style={[styles.box, styles.box7]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={() => {
              this.showSlideshowComponent(uris[6]);
            }}
          >
            <View style={styles.touchableContent}>
              <Text style={styles.optionText}>Violación</Text>
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
              <Text style={styles.optionText}>Voluntad de la Mujer</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    color: "#eee",
    fontFamily: "quicksand-book",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 3,
    textShadowColor: "#222",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15
  },
  touchableContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    flex: 1
  },
  box1: {
    flex: 1,
    backgroundColor: "#e7813a"
  },
  box2: {
    flex: 1,
    backgroundColor: "#e98c4c"
  },
  box3: {
    flex: 1,
    backgroundColor: "#eb975d"
  },
  box4: {
    flex: 1,
    backgroundColor: "#eda26e"
  },
  box5: {
    flex: 1,
    backgroundColor: "#efad80"
  },
  box6: {
    flex: 1,
    backgroundColor: "#f1b991"
  },
  box7: {
    flex: 1,
    backgroundColor: "#f4c4a3"
  },
  box8: {
    flex: 1,
    backgroundColor: "#f6cfb4"
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
)(CausalesScreen);
