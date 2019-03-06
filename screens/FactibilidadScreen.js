import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import SlideshowModalScreen from './SlideshowModalScreen';

const images = [
    [ //when the user presses Derechos Humanos
        //{ source: require('../assets/slides/derechos_humanos/1.jpg'), dimensions: { width: 1920, height: 1080 } },
        //{ source: require('../assets/slides/derechos_humanos/2.jpg'), dimensions: { width: 1920, height: 1080 } },
        { source: require('../assets/slides/placeholder.jpg'), dimensions: { width: 1920, height: 1080 } },
    ],
    [
        { source: require('../assets/slides/placeholder.jpg'), dimensions: { width: 1920, height: 1080 } },
    ]
]

export default class FactibilidadScreen extends React.Component {
    static navigationOptions = {
        title: 'Factibilidad de Caso',
        header: null
    }
    state = {
        selectedimages: null,
        modalVisible: false,
    }

    hideStatusBar = () => {
        console.log('Hiding StatusBar')
        StatusBar.setHidden(true);
    }

    //To bind the state of this Screen with the SlideshowModalScreen's visible prop
    updateState(data) {
        this.setState(data);
    }

    render() {
        return (
            <View style={styles.containerColumn}>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 0, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Causales
              </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 1, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-heart" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Estados
                </Text>
                        </View>
                    </Touchable>
                </View>
                <SlideshowModalScreen
                    images={images[this.state.selectedimages]}
                    visible={this.state.modalVisible}
                    updateParentState={this.updateState.bind(this)} />
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
    box1: {
        flex: 1,
        fontSize: 28,
        backgroundColor: '#ef7f89'
    },
    box2: {
        flex: 1,
        backgroundColor: '#ad7fef'
    },
});