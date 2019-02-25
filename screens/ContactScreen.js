import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        messageText: 'empty'
    }

    _onPressButton() {
        Alert.alert(`Se ha enviado tu mensaje`);
    }

    render() {
        return (
            <LinearGradient colors={['#c6f', '#EF7FC1']} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/flower.png')}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={styles.getStartedContainer}>

                        <Text style={styles.welcomeText}>
                            Cuéntanos tu experiencia
            </Text>
                    </View>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.messageBox}
                            placeholder="Escribe tu mensaje aqui."
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(text) => this.setState({ messageText: text })}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Envíanos tus comentarios"
                            color="#841584"
                            style={{ height: '40' }}
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 5,
    },
    welcomeImage: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    welcomeText: {
        fontFamily: 'quicksand-bold',
        fontSize: 40,
        color: '#fff',
        lineHeight: 50,
        textAlign: 'center',
        paddingVertical: 10,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    ionIconSocialMedia: {
        color: '#2f95dc'
    },
    messageBox:
    {
        backgroundColor: '#eee',
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 10,
    },
    textInputContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    buttonContainer: {
        margin: 20
    },
});
