import React, { Component } from 'react';
import { Modal, StatusBar } from 'react-native';
import Gallery from 'react-native-image-gallery';

const images = [

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

class SlideshowModalScreen extends Component {
    constructor() {
        super();
    };
    static navigationOptions = {
        header: null,
    };

    //To bind this Modal screen's visible prop to the parent's state
    updateParentState(data) {
        this.props.updateParentState(data);
    }

    render() {
        return (
            <Modal
                style={{ flex: 1, backgroundColor: 'black' }}
                visible={this.props.visible}
                transparent={true} animationType="slide"
                onShow={() => {
                    console.log('Allowing rotation...')
                    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
                    console.log('SlideshowModalScreen: onShow()');
                }}
                onRequestClose={() => {
                    console.log('SlideshowModalScreen: onRequestClose()');
                    console.log('Showing StatusBar...')
                    StatusBar.setHidden(false);
                    console.log('Disallowing rotation...')
                    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
                    this.updateParentState({ modalVisible: false })
                }
                }>
                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    initialPage={0}
                    images={this.props.images}
                />
            </Modal>
        )
    }
}

export default SlideshowModalScreen