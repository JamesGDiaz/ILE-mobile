import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import SlideshowModalScreen from './SlideshowModalScreen';
import { CacheManager } from "react-native-expo-image-cache";
import Toast from 'react-native-simple-toast'

const uris = [
    [
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FCl%C3%ADnicas%2F1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FCl%C3%ADnicas%2F2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FCl%C3%ADnicas%2F3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FHospitales%2F4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FHospitales%2F5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FHospitales%2F6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FHospitales%2F7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCl%C3%ADnicas%20y%20Hospitales%2FHospitales%2F8.jpg?alt=media",
    ],
    [
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FRequisitos%2F6.jpg?alt=media",
    ],
    [
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FM%C3%A9todos%2FA.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FM%C3%A9todos%2FB.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FM%C3%A9todos%2FC.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FM%C3%A9todos%2FR.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FM%C3%A9todos%2FU.jpg?alt=media',
    ],
    [
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F1.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F2.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F3.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F4.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F5.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F6.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FProceso%2F7.jpg?alt=media',
    ],
    [
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCuidados%2F1.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCuidados%2F2.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/ile-mobile-1551929213713.appspot.com/o/Facilidades%20de%20acceso%2FCuidados%2F3.jpg?alt=media',
    ]
]

export default class FacilidadesScreen extends React.Component {
    static navigationOptions = {
        title: 'Facilidades de Acceso',
        headerStyle: {
            backgroundColor: '#eb5cb0',
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
                        showMap={true}
                        onPress={() => {
                            this.showSlideshowComponent(uris[0]);
                        }}>
                        <View style={styles.touchableContent}>
                            <View style={styles.optionIconContainer}>
                                <Ionicons name="ios-business" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Clínicas y Hospitales
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
                                <Ionicons name="md-checkmark-circle-outline" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Requisitos
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
                                <Ionicons name="ios-color-wand" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Métodos
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
                                <Ionicons name="ios-bulb" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Procesos
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
                                <Ionicons name="ios-pulse" size={38} color="#eee" />
                            </View>
                            <Text style={styles.optionText}>
                                Cuidados
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
        marginHorizontal: 10,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },
    touchableContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        flex: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: '#e84ba8'
    },
    box2: {
        flex: 1,
        backgroundColor: '#eb5cb0'
    },
    box3: {
        flex: 1,
        backgroundColor: '#ed6eb9'
    },
    box4: {
        flex: 1,
        backgroundColor: '#ef7fc1'
    },
    box5: {
        flex: 1,
        backgroundColor: '#f190c9'
    },
});