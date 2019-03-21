import React from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableWithoutFeedback, Image, Platform, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Tracking from '../components/Tracking';
import InfoModalScreen from './InfoScreen';

export default class LinksScreen extends React.Component {
  state = {
    modalInfoScreenVisible: false
  }
  static navigationOptions = {
    title: 'Enlaces',
    header: null
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }
  //To bind the state of this Screen with the SlideshowModalScreen's visible prop
  updateState(data) {
    this.setState(data);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerColumn}>
          <View style={styles.box1}>
            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => this.props.navigation.navigate('Derechos')}>
              <View style={styles.touchableContent}>
                <View style={styles.optionIconContainer}>
                  <Ionicons name="md-happy" size={38} color="#eee" />
                </View>
                <Text style={styles.optionText}>
                  Tus Derechos
              </Text>
              </View>
            </Touchable>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.box2}>
              <Touchable
                background={Touchable.Ripple('#ccc', false)}
                style={styles.option}
                onPress={() => this.props.navigation.navigate('Normatividad')}>
                <View style={styles.touchableContent}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons name="md-paper" size={38} color="#eee" />
                  </View>
                  <Text style={styles.optionText}>
                    Normatividad
                </Text>
                </View>
              </Touchable>
            </View>
            <View style={styles.box3}>
              <Touchable
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.props.navigation.navigate('Facilidades')}>
                <View style={styles.touchableContent}>
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
            <View style={styles.box4}>
              <Touchable
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.props.navigation.navigate('Factibilidad')}>
                <View style={styles.touchableContent}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons name="md-heart" size={38} color="#eee" />
                  </View>
                  <Text style={styles.optionText}>
                    Factibilidad{"\n"}de Caso
                </Text>
                </View>
              </Touchable>
            </View>
            <View style={styles.box5}>
              <Touchable
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.props.navigation.navigate('Redes')}>
                <View style={styles.touchableContent}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons name="md-contacts" size={38} color="#eee" />
                  </View>
                  <Text style={styles.optionText}>
                    Redes{"\n"}de Apoyo
                </Text>
                </View>
              </Touchable>
            </View>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.box6}>
              <Touchable
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.props.navigation.navigate('ClinicMap')}>
                <View style={styles.touchableContent}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons name="md-map" size={38} color="#eee" />
                  </View>
                  <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>
                      Mapas
            </Text>
                  </View>
                </View>
              </Touchable>
            </View>
            <View style={styles.box7}>
              <Touchable
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.props.navigation.navigate('Contact')}>
                <View style={styles.touchableContent}>
                  <View style={styles.optionIconContainer}>
                    <Ionicons name="ios-chatboxes" size={38} color="#eee" />
                  </View>
                  <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>
                      ¡Cuéntanos tu experiencia!
            </Text>
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        <Tracking >
          <TouchableWithoutFeedback onPress={() => this.setState({ modalInfoScreenVisible: true })}>
            <View style={styles.chatheadView}>
              <Image style={styles.chatheadbox} source={require('../assets/images/info.png')} />
            </View>
          </TouchableWithoutFeedback>
        </Tracking>
        <InfoModalScreen
          isOpen={this.state.modalInfoScreenVisible}
          updateParentState={this.updateState.bind(this)} />
      </View >
    );
  }
}

const BOX_SIZE = 65

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
  chatheadbox: {
    position: 'absolute',
    width: BOX_SIZE - 1,
    height: BOX_SIZE - 1,
  },
  chatheadView: {
    position: 'absolute',
    width: BOX_SIZE,
    height: BOX_SIZE,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 6,
      },
    }),
    borderRadius: BOX_SIZE / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#555'
  },
  optionIconContainer: {
    flex: 1,
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
  touchableContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    flex: 1,
  },
  boxLarge: {
    flex: 2,
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
    backgroundColor: '#efad7f'
  },
  box5: {
    flex: 1,
    backgroundColor: '#39e6ac'
  },
  box6: {
    flex: 1,
    backgroundColor: '#89cff0'
  },
  box7: {
    flex: 1,
    backgroundColor: '#e73ba0'
  }

});