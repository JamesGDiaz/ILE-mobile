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
                require('../assets/slides/derechos_humanos/img1.jpg'),
                require('../assets/slides/derechos_humanos/img2.jpg'),
                require('../assets/slides/derechos_humanos/img3.jpg'),
            ],
            [ //when the user presses Normatividad
                require('../assets/slides/normatividad/img1.jpg'),
                require('../assets/slides/normatividad/img2.png'),
                require('../assets/slides/normatividad/img3.png'),
                require('../assets/slides/normatividad/img4.jpg'),
            ],
            [

            ],
            [

            ],
            [

            ]
        ]

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '010101' }}>
                <ImageSlider
                    images={dataSource[this.state.callerId]}
                    style={StyleSheet.scrollview}
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

