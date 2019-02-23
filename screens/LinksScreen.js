import React from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Enlaces',
  };

  _handlePressHumanRights = () => {
    Alert.alert('Derechos humanos');
    console.log('derechos humanos pressed');
  };

  _handlePressNormativity = () => {
    Alert.alert('normatividad');
    console.log('normatividad pressed');
  };

  _handlePressFacilidades = () => {
    Alert.alert("facilidades");
  };

  _handlePressFactibilidad = () => {
    Alert.alert("factibildad");
  };

  _handlePressSupportNetworks = () => {
    Alert.alert("redes de apoyo");
  };

  _handlePressCuentanos = () => {
    Alert.alert("cuentanos tu experiencia");
  };

  render() {
    return (
      <View>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressHumanRights}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-happy" size={32} color="#3366ff" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Derechos Humanos
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressNormativity}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-paper" size={32} color="#7300e6" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Normatividad
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressFacilidades}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-hand" size={32} color="#ff33cc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Facilidades de Acceso
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressFactibilidad}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-heart" size={32} color="red" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Factibilidad de Caso
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressSupportNetworks}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-contacts" size={32} color="#00cc00" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Redes de Apoyo
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressCuentanos}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="ios-chatboxes" size={32} color="#ff9900" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Cuéntanos tu experiencia!
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 11,
  },
  option: {
    backgroundColor: '#fbfbfb',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  optionText: {
    fontSize: 17,
    marginTop: 6,
    marginRight: 3
  },
});
