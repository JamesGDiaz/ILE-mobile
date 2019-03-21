import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, Animated, Platform, Dimensions } from 'react-native'
import Modal from 'react-native-modalbox'

export default class InfoModalScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            swipeToClose: true,
        };
    }

    //To bind this Modal screen's visible prop to the parent's state
    updateParentState(data) {
        this.props.updateParentState(data);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onClosed={() => this.updateParentState({ modalInfoScreenVisible: false })}
                style={styles.modal}
                position={"center"}
                swipeToClose={this.state.swipeToClose}
                swipeThreshold={100}>
                <View style={styles.container}>
                    <Text style={[styles.modalText, styles.justificacion]}>Esta estrategia surge a partir de la necesidad de proporcionar una guía de acompañamiento terapéutico con la intención de una toma de decisiones consiente e informada, dirigiendo y facilitando así el proceso  de la Interrupción Legal del Embarazo.</Text>
                    <Text style={[styles.modalText, styles.hechopor]}>Realizado por:{'\n'}Franco Giordani{'\n'}y{'\n'}Katya Ruiz</Text>
                    <View style={styles.justificacionImagesView}>
                        <Image source={require('../assets/images/logo-unam.png')} style={styles.justificacionImages} resizeMode="contain" />
                    </View>
                </View>
            </Modal>
        )
    }

}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    modal: {
        height: screen.height - 50,
        width: screen.width - 50,
        borderRadius: 15,
        borderColor: '#ddd',
        borderWidth: StyleSheet.hairlineWidth,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 4,
            },
        }),
        opacity: 0.85,
    },
    container: {
        flex: 1,
        paddingVertical: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainerView: {
        flex: 1,
        backgroundColor: '#eee',
        margin: 22,
        borderRadius: 15,
        borderColor: '#ccc',
        borderWidth: StyleSheet.hairlineWidth,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    modalText: {
        color: '#444',
        fontFamily: 'quicksand-book',
        fontSize: 16,
        lineHeight: 20,
        marginHorizontal: 15,
    },
    justificacion: {
        flex: 1,
        textAlign: 'center',
    },
    hechopor: {
        flex: 0.5,
        textAlign: 'center',
        marginBottom: 10,
    },
    justificacionImagesView: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    },
    justificacionImages: {
        flex: 1,
        width: screen.width / 2
    },
});



