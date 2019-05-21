import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppContainer from "./navigation/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <Provider store={store}>
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={this._handleFinishLoading}
            onError={console.warn}
          />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "quicksand-bold": require("./assets/fonts/Quicksand_Bold.otf"),
        "quicksand-book": require("./assets/fonts/Quicksand_Book.otf")
      })
    ]);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    console.log("Hiding StatusBar");
    StatusBar.setHidden(true);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
