import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppContainer from './navigation/AppContainer';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
          onError={console.warn}
        />
      );
    } else {
      return (
        <View style={styles.container} >
          <AppContainer />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'quicksand-bold': require('./assets/fonts/Quicksand_Bold.otf'),
        'quicksand-book': require('./assets/fonts/Quicksand_Book.otf'),
      }),
    ]);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    console.log('Hiding StatusBar');
    StatusBar.setHidden(true);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
