import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, TouchableHighlight, Text, Image } from 'react-native';
import Gallery from 'react-native-image-gallery'

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
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
    }

    componentWillUnmount() {
        //Disllow rotation
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
    }

    render() {
        const dataSource = [
            [ //when the user presses Derechos Humanos
                { source: require('../assets/slides/derechos_humanos/1.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/derechos_humanos/2.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/derechos_humanos/3.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/derechos_humanos/4.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/derechos_humanos/5.jpg'), dimensions: { width: 1920, height: 1080 } },
            ],
            [ //when the user presses Normatividad
                { source: require('../assets/slides/normatividad/1.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/2.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/3.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/4.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/5.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/6.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/normatividad/7.jpg'), dimensions: { width: 1920, height: 1080 } },
            ],
            [
                { source: require('../assets/slides/facilidades_acceso/1.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/2.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/3.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/4.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/9.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/10.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/11.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/facilidades_acceso/12.jpg'), dimensions: { width: 1920, height: 1080 } },

            ],
            [
                { source: require('../assets/slides/factibilidad/1.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/factibilidad/2.jpg'), dimensions: { width: 1920, height: 1080 } },
            ],
            [
                { source: require('../assets/slides/redes_de_apoyo/1.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/2.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/3.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/4.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/5.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/6.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/7.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/8.jpg'), dimensions: { width: 1920, height: 1080 } },
                { source: require('../assets/slides/redes_de_apoyo/9.jpg'), dimensions: { width: 1920, height: 1080 } },
            ]
        ]

        return (
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                initialPage={0}
                //initial image to show
                images={dataSource[this.state.callerId]}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

