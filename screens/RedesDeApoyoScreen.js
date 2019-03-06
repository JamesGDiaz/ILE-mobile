import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import SlideshowModalScreen from './SlideshowModalScreen';

const images = [
    [ //when the user presses Derechos Humanos
        { source: require('../assets/slides/derechos_humanos/1.jpg'), dimensions: { width: 1920, height: 1080 } },
        { source: require('../assets/slides/derechos_humanos/2.jpg'), dimensions: { width: 1920, height: 1080 } },
    ],
    [ //when the user presses Derechos Sexuales
        { source: require('../assets/slides/derechos_humanos/3.jpg'), dimensions: { width: 1920, height: 1080 } },
        { source: require('../assets/slides/derechos_humanos/4.jpg'), dimensions: { width: 1920, height: 1080 } },
        { source: require('../assets/slides/derechos_humanos/5.jpg'), dimensions: { width: 1920, height: 1080 } },
    ],
]

export default class RedesScreen extends React.Component {
    static navigationOptions = {
        title: 'Redes de Apoyo',
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
                <View style={[styles.box, styles.box2]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 0, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-heart" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Marie Stopes
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 1, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                ddser
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 2, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Fundación ILE
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 3, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Centro Médico Mujer
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 4, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Fundación Naiset
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 5, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Musas
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 6, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Adivac
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 7, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Gire
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 8, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Fundación María
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 9, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                IPAS
                            </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.hideStatusBar()
                            this.setState({ selectedimages: 10, modalVisible: true });
                        }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-body" size={20} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Católicas por el Derecho a Decidir
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
        marginHorizontal: 10,
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
        fontSize: 26,
        backgroundColor: '#ef7f89'
    },
    box2: {
        flex: 1,
        backgroundColor: '#ad7fef'
    },
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