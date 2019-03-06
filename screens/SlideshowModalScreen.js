import React, { Component } from 'react';
import { Modal, StatusBar } from 'react-native';
import Gallery from 'react-native-image-gallery';

export default class SlideshowModalScreen extends Component {
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
                style={
                    {
                        flex: 1,
                        backgroundColor: 'black'
                    }}
                visible={this.props.visible}
                transparent={true}
                animationType="slide"
                onShow={() => {
                    console.log('SlideshowModalScreen: onShow()');
                    console.log('Allowing rotation...')
                    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
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