import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import SlideshowModalScreen from './SlideshowModalScreen';
import { CacheManager } from "react-native-expo-image-cache";
import Toast from 'react-native-simple-toast'

const uris = [
    [ //when the user presses Constitucion Politica...
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FConstituci%C3%B3n%20Pol%C3%ADtica%20de%20los%20Estados%20Unidos%20Mexicanos%2F1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FConstituci%C3%B3n%20Pol%C3%ADtica%20de%20los%20Estados%20Unidos%20Mexicanos%2F2.jpg?alt=media"
    ],
    [//when the user presses Ley Gral de victimas
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20v%C3%ADctimas%2F3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20v%C3%ADctimas%2F4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20v%C3%ADctimas%2F5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20v%C3%ADctimas%2F6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20v%C3%ADctimas%2F7.jpg?alt=media",
    ],
    [//when the user presses Ley gral de salud
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20salud%2F1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20salud%2F2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20salud%2F3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FLey%20general%20de%20salud%2F4.jpg?alt=media",
    ],
    [//when the user presses NOM-046
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FA.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FB.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FC.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FD.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FE.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FF.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FG.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FH.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FI.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FJ.jpg?alt=media&",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FNOM%20046%2FK.jpg?alt=media&",
    ],
    [ // codigo penal
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FC%C3%B3digo%20penal%2F5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FC%C3%B3digo%20penal%2F6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Normatividad%2FC%C3%B3digo%20penal%2F7.jpg?alt=media",
    ],
]

export default class NormatividadScreen extends React.Component {
    static navigationOptions = {
        title: 'Normatividad',
        headerStyle: {
            backgroundColor: '#975ceb',
        },
    }
    state = {
        SlideshowComponent: {
            modalVisible: false,
            images: [null],
        }
    }

    async clearCache() {
        console.log('Clearing Cache...');
        await CacheManager.clearCache();
        console.log('Cache cleared');
    }

    //To bind the state of this Screen with the SlideshowModalScreen's visible prop
    updateState(data) {
        this.setState(data);
    }

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    showSlideshowComponent(uris) {
        //this.clearCache()
        console.log('Hiding StatusBar...');
        StatusBar.setHidden(true);
        this.setState({ SlideshowComponent: { images: uris, modalVisible: true } })
    }

    render() {
        return (
            <View style={styles.containerColumn}>
                <View style={[styles.box, styles.box1]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.showSlideshowComponent(uris[0]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-book" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Constitución Política de México
              </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.showSlideshowComponent(uris[1]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-warning" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Ley General de Víctimas
                </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box3]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.showSlideshowComponent(uris[2]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-medkit" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Ley General de Salud
              </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box4]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.showSlideshowComponent(uris[3]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="md-ribbon" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                NOM-046
              </Text>
                        </View>
                    </Touchable>
                </View>
                <View style={[styles.box, styles.box5]}>
                    <Touchable
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={() => {
                            this.showSlideshowComponent(uris[4]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-alert" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Código Penal Federal
              </Text>
                        </View>
                    </Touchable>
                </View>
                <SlideshowModalScreen
                    images={this.state.SlideshowComponent.images}
                    visible={this.state.SlideshowComponent.modalVisible}
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
        flex: 0.2,
        color: '#eee',
        marginHorizontal: 5,
        marginBottom: 16
    },
    option: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        color: '#eee',
        fontFamily: 'quicksand-book',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
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
    box1: {
        flex: 1,
        fontSize: 28,
        backgroundColor: '#8b4be8'
    },
    box2: {
        flex: 1,
        backgroundColor: '#975ceb'
    },
    box3: {
        flex: 1,
        backgroundColor: '#a26eed'
    },
    box4: {
        flex: 1,
        backgroundColor: '#ad7fef'
    },
    box5: {
        flex: 1,
        backgroundColor: '#b890f1'
    },
});