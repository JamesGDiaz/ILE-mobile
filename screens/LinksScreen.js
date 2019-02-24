import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Enlaces',
    header: null
  }
  state = {
    isModalVisible: false,
    ModalVisible: false,
  };

  _handlePressHumanRights = () => {
    this.props.navigation.navigate('Slideshows', { callerId: 0 });
  };

  _handlePressNormativity = () => {
    this.props.navigation.navigate('Slideshows', { callerId: 1 });
  };

  _handlePressFacilidades = () => {
    this.props.navigation.navigate('Slideshows', { callerId: 2 });

  };

  _handlePressFactibilidad = () => {
    this.props.navigation.navigate('Slideshows', { callerId: 3 });
  };

  _handlePressSupportNetworks = () => {
    this.props.navigation.navigate('Slideshows', { callerId: 4 });
  };

  _handlePressCuentanos = () => {
    this.props.navigation.navigate('Contact');
  };

  render() {
    return (
      <View style={styles.containerColumn}>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#101010" translucent={false} />
        <View style={[styles.box, styles.box1]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressHumanRights}>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="md-happy" size={38} color="#cccc00" />
              </View>
              <Text style={styles.optionText}>
                Derechos Humanos
              </Text>
            </View>
          </Touchable>
        </View>
        <View style={styles.containerRow}>
          <View style={[styles.box, styles.box2]}>
            <Touchable
              background={Touchable.Ripple('#ccc', false)}
              style={styles.option}
              onPress={this._handlePressNormativity}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="md-paper" size={38} color="#7300e6" />
                </View>
                <Text style={styles.optionText}>
                  Normatividad
                </Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box3]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressFacilidades}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="md-hand" size={38} color="#ff33cc" />
                </View>
                <Text style={styles.optionText}>
                  Facilidades{"\n"}de Acceso
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={[styles.box, styles.box4]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressFactibilidad}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="md-heart" size={38} color="red" />
                </View>
                <Text style={styles.optionText}>
                  Factibilidad{"\n"}de Caso
                </Text>
              </View>
            </Touchable>
          </View>
          <View style={[styles.box, styles.box5]}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePressSupportNetworks}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="md-contacts" size={38} color="#3366ff" />
                </View>
                <Text style={styles.optionText}>
                  Redes{"\n"}de Apoyo
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        <View style={[styles.boxLarge, styles.box6]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressCuentanos}>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={38} color="#0099ff" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Cuéntanos tu experiencia!
            </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  optionIconContainer: {
    flex: 1,
    color: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 15,
  },
  option: {
    flex: 1,
  },
  optionText: {
    color: '#eee',
    fontFamily: 'laila-regular',
    fontSize: 22,
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxLarge: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    flex: 0.7,
    fontSize: 28,
    backgroundColor: '#0099ff'
  },
  box2: {
    flex: 1,
    backgroundColor: '#cc3399'
  },
  box3: {
    flex: 1,
    backgroundColor: '#8BC34A'
  },
  box4: {
    flex: 1,
    backgroundColor: '#e3aa1a'
  },
  box5: {
    flex: 1,
    backgroundColor: '#ff4d88'
  },
  box6: {
    flex: 1,
    fontSize: 28,
    backgroundColor: '#ffcc00'
  }
});
