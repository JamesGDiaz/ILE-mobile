import React, { Component } from 'react';
import { Modal, StatusBar, View, Image, StyleSheet } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Toast from 'react-native-simple-toast';
import { CacheManager } from "react-native-expo-image-cache";

export default class SlideshowModalScreen extends Component {
    state = {
        images: [null]
    }

    static navigationOptions = {
        header: null,
    };

    async _asyncDownloadImages(uris) {
        //this.clearCache()
        console.log('Downloading images (or getting them from the cache)');
        var images = [];
        for (var i = 0; i < uris.length; i++) {
            images.push({ source: require('../assets/images/cargando.png'), dimensions: { width: 1920, height: 1080 } })
        }
        for (var i = 0; i < uris.length; i++) {
            let path = undefined;
            try { path = await CacheManager.get(uris[i]).getPath(); }
            catch {
                Toast.show('Error al cargar las imágenes. Verifica tu conexión a internet', Toast.SHORT);
                break;
            }
            console.log('Downloading image ' + (i + 1) + '/' + uris.length);
            images.splice(i, 1, { source: { uri: path }, dimensions: { width: 1920, height: 1080 } });
            this.setState({
                images
            });
        }
    }

    async clearCache() {
        console.log('Clearing Cache...');
        await CacheManager.clearCache();
        console.log('Cache cleared');
    }
    //To bind this Modal screen's visible prop to the parent's state
    updateParentState(data) {
        this.props.updateParentState(data);
    }

    render() {
        return (
            <Modal
                style={styles.container}
                visible={this.props.visible}
                animationType="none"
                onShow={() => {
                    console.log('SlideshowModalScreen: onShow()');
                    console.log('Landscape mode...');
                    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
                    this._asyncDownloadImages(this.props.images);
                }}
                onRequestClose={() => {
                    StatusBar.setHidden(false);
                    console.log('SlideshowModalScreen: onRequestClose()');
                    console.log('Disallowing rotation...')
                    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
                    this.setState({ images: [null] });
                    this.updateParentState({ SlideshowComponent: { modalVisible: false } })
                }
                }>
                {this.state.images[0] == null ? null :
                    <ImageSlider
                        images={this.state.images}
                        customSlide={({ index, item, width }) => (
                            <View
                                key={index}
                                style={styles.customSlide}
                            >
                                <Image source={item.source} style={styles.customImage} resizeMode='center' width={width} />
                            </View>
                        )}
                        customButtons={(position) => (
                            <View style={styles.buttons}>
                                {this.state.images.map((image, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={styles.button}
                                        >
                                            <View style={position === index && styles.buttonSelected}>
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        )}
                    />
                }
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    customSlide: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        flex: 1,
        width: 100,
        height: 100,
    },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#656565',
        margin: 3,
        width: 12,
        height: 12,
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    buttonSelected: {
        backgroundColor: '#d1d1d1',
        margin: 3,
        width: 12,
        height: 12,
        opacity: 0.7,
        borderRadius: 6
    },
});
