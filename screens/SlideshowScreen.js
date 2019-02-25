import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, TouchableHighlight, Text, Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class SlideshowScreen extends Component {
    constructor() {
        super();
        this.state = {
            OrientationStatus: '',
            callerId: null
        }
    };
    static navigationOptions = {
        header: null,
    };

    getDeviceOrientation() {
        var { height, width } = Dimensions.get('screen');
        if (height > width) {
            return 'PORTRAIT'
        }
        else return 'LANDSCAPE'
    }

    componentWillMount() {
        //Set callerId and OrientationStatus
        this.setState(
            {
                callerId: this.props.navigation.getParam('callerId'),
                OrientationStatus: this.getDeviceOrientation()
            });
    }

    componentDidMount() {
        console.log(`SlideshowScreen shown, callerId: ${this.state.callerId}`);
        console.log(`OrientationStatus: ${this.state.OrientationStatus}`);

        //Set screen in landscape
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }

    componentWillUnmount() {
        //Disllow rotation
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
    }

    render() {
        const dataSource = [
            [ //when the user presses Derechos Humanos
                require('../assets/slides/derechos_humanos/1.jpg'),
                require('../assets/slides/derechos_humanos/2.jpg'),
                require('../assets/slides/derechos_humanos/3.jpg'),
                require('../assets/slides/derechos_humanos/4.jpg'),
                require('../assets/slides/derechos_humanos/5.jpg'),
            ],
            [ //when the user presses Normatividad
                require('../assets/slides/normatividad/1.jpg'),
                require('../assets/slides/normatividad/2.jpg'),
                require('../assets/slides/normatividad/3.jpg'),
                require('../assets/slides/normatividad/4.jpg'),
                require('../assets/slides/normatividad/5.jpg'),
                require('../assets/slides/normatividad/6.jpg'),
                require('../assets/slides/normatividad/7.jpg'),
            ],
            [
                require('../assets/slides/facilidades_acceso/1.jpg'),
                require('../assets/slides/facilidades_acceso/2.jpg'),
                require('../assets/slides/facilidades_acceso/3.jpg'),
                require('../assets/slides/facilidades_acceso/4.jpg'),
                require('../assets/slides/facilidades_acceso/9.jpg'),
                require('../assets/slides/facilidades_acceso/10.jpg'),
                require('../assets/slides/facilidades_acceso/11.jpg'),
                require('../assets/slides/facilidades_acceso/12.jpg'),

            ],
            [
                require('../assets/slides/factibilidad/1.jpg'),
                require('../assets/slides/factibilidad/2.jpg'),
            ],
            [
                require('../assets/slides/redes_de_apoyo/1.jpg'),
                require('../assets/slides/redes_de_apoyo/2.jpg'),
                require('../assets/slides/redes_de_apoyo/3.jpg'),
                require('../assets/slides/redes_de_apoyo/4.jpg'),
                require('../assets/slides/redes_de_apoyo/5.jpg'),
                require('../assets/slides/redes_de_apoyo/6.jpg'),
                require('../assets/slides/redes_de_apoyo/7.jpg'),
                require('../assets/slides/redes_de_apoyo/8.jpg'),
                require('../assets/slides/redes_de_apoyo/9.jpg'),
            ]
        ]

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '010101' }}>
                <ImageSlider
                    images={dataSource[this.state.callerId]}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },

});

