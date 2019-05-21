import React from "react";
import { connect } from "react-redux";
import { setImageList, setModalVisible } from "../actions/connectionActions";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";
import SlideshowModalScreen from "./SlideshowModalScreen";

const uris = [
  [
    //when the user presses Derechos Humanos
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F3.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F5.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F6.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_humanos%2F7.jpg?alt=media"
  ],
  [
    //when the user presses Derechos Sexuales
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FA.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FB.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FC.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FD.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FE.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FF.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FG.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FH.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FI.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/derechos%2Fderechos_sexuales%2FJ.jpg?alt=media"
  ]
];

class DerechosScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Tus Derechos",
    headerStyle: {
      backgroundColor: "#eb5c69"
    }
  };

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
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-people" size={50} color="#eee" />
              </View>
              <Text style={styles.optionText}>Derechos Humanos</Text>
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
                <Ionicons name="ios-female" size={50} color="#eee" />
              </View>
              <Text style={styles.optionText}>
                Derechos Sexuales Y Reproductivos
              </Text>
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
    marginHorizontal: 5,
    marginBottom: 16
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
    fontSize: 28,
    backgroundColor: "#ef7f89"
  },
  box2: {
    flex: 1,
    backgroundColor: "#f19099"
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
)(DerechosScreen);
