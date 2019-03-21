import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import email from 'react-native-email';

var spin = null;

export default class ContactScreen extends React.Component {
    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
    }
    static navigationOptions = {
        header: null,
    };

    _onPressButton() {
        Alert.alert(`Se ha enviado tu mensaje`);
    }

    componentDidMount() {
        this.StartImageRotateFunction();
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => this.StartImageRotateFunction());
    }

    _handleEmail() {
        const to = ['interrupcionlegaldelembarazo19@gmail.com']
        email(to, {
            subject: 'Comentarios sobre mi experiencia',
            body: "\uD83D\uDE00"
        }).catch(console.error)
    }

    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <LinearGradient colors={['#c6f', '#EF7FC1']} style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        ¡Cuéntanos tu experiencia!
                        </Text>
                    <View style={styles.sendMessageContainer}>
                        <Text style={styles.emailText}>
                            ¡Envíanos un email!
                        </Text>
                        <TouchableOpacity style={styles.socialIcon} onPress={this._handleEmail}>
                            <Ionicons name="md-mail" size={85} color='#f4f4f4' />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.socialNetworksText}>
                        ¡Buscanos en nuestras redes sociales!
                    </Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity >
                            <Ionicons name="logo-facebook" size={60} color='#f4f4f4' style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="logo-instagram" size={60} color='#f4f4f4' style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="logo-twitter" size={60} color='#f4f4f4' style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Animated.Image
                            source={require('../assets/images/flower.png')}
                            style={{
                                flex: 0.9,
                                width: 200,
                                height: 160,
                                resizeMode: 'contain',
                                transform: [{ rotate: RotateData }]
                            }}
                        />
                    </View>
                </View>
            </LinearGradient >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        flex: 0.3,
        color: '#eee',
        fontFamily: 'quicksand-book',
        fontSize: 24,
        marginHorizontal: 20,
        marginTop: 60,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15,
    },
    sendMessageContainer: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageBox:
    {
        flex: 1,
        backgroundColor: '#eee',
        borderColor: '#848484',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    textSend: {
        fontFamily: 'quicksand-book',
        fontSize: 14,
        color: '#eee'
    },
    socialNetworksText: {
        flex: 0.3,
        color: '#eee',
        fontFamily: 'quicksand-book',
        fontSize: 20,
        marginTop: 35,
        marginHorizontal: 20,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15,
        textAlign: 'center'
    },
    emailText: {
        flex: 0.3,
        color: '#eee',
        fontFamily: 'quicksand-book',
        fontSize: 20,
        marginTop: 35,
        marginHorizontal: 20,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15,
        marginBottom: 15
    },
    iconContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 50,
        marginHorizontal: 50,
    },
    socialIcon: {
        flex: 1,
        marginHorizontal: 20
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutText: {
        flex: 1,
        fontFamily: 'quicksand-book',
        fontSize: 14,
        color: '#eee',
        lineHeight: 20,
        marginLeft: 25,

    },
    flowerImage: {
        flex: 0.9,
        width: 200,
        height: 160,
        resizeMode: 'contain',
        marginBottom: 25,
        transform: [{ rotate: this.RotateData }]
    },
});
