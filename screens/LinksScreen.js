import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Enlaces',
    header: null
  }

  _handlePressHumanRights = () => {
    this.props.navigation.navigate('Derechos');
  };

  _handlePressNormativity = () => {
    this.props.navigation.navigate('Normatividad');
  };

  _handlePressFacilidades = () => {
    this.props.navigation.navigate('Facilidades');

  };

  _handlePressFactibilidad = () => {
    this.props.navigation.navigate('Factibilidad');
  };

  _handlePressSupportNetworks = () => {
    this.props.navigation.navigate('Redes');
  };

  _handlePressCuentanos = () => {
    this.props.navigation.navigate('Contact');
  };

  render() {
    return (
      <View style={styles.containerColumn}>
        <View style={[styles.box, styles.box1]}>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressHumanRights}>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="md-happy" size={38} color="#eee" />
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
                  <Ionicons name="md-paper" size={38} color="#eee" />
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
                  <Ionicons name="md-hand" size={38} color="#eee" />
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
                  <Ionicons name="md-heart" size={38} color="#dd1c8d" />
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
                  <Ionicons name="md-contacts" size={38} color="#ad7fef" />
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
                <Ionicons name="ios-chatboxes" size={38} color="#7fe1cf" />
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
    fontFamily: 'quicksand-book',
    fontSize: 20,
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
    flex: 0.8,
    fontSize: 28,
    backgroundColor: '#ef7f89'
  },
  box2: {
    flex: 1,
    backgroundColor: '#ad7fef'
  },
  box3: {
    flex: 1,
    backgroundColor: '#ef7fc1'
  },
  box4: {
    flex: 1,
    backgroundColor: '#c1ef7f'
  },
  box5: {
    flex: 1,
    backgroundColor: '#7fefad'
  },
  box6: {
    flex: 1,
    backgroundColor: '#e73ba0'
  }
});

/*
Amarillo bonito
#FFF87F

Lila betun de pastel chafa
#F5DCF9

Rosa labial de barbie
#FFE4E1

Verde pistachon
#DCF9E4

Naranja con subtono amarillo atardecer
#FFE1AE

Nude kim kardashian
F5DABD

No sé cómo describir este, verde con 4 litros de blanco encima
#F7F7C6

Ps ya un gris príncipe de gales si como no
#E0E4CC
*/