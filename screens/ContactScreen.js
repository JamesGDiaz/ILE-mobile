import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <LinearGradient colors={['#c6f', '#EF7FC1']} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/tablet.png')}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={styles.getStartedContainer}>

                        <Text style={styles.welcomeText}>
                            Cuentanos tu experiencia
            </Text>
                    </View>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Escribe tu mensaje aqui."
                    />
                    <View style={styles.container}>

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
        marginTop: 10,
        marginBottom: 20,
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
    homeScreenFilename: {
        marginVertical: 7,
    },
    getStartedText: {
        fontSize: 22,
        color: '#f7f7f7',
        lineHeight: 24,
        textAlign: 'center',
        paddingVertical: 25
    },
    welcomeText: {
        fontFamily: 'quicksand-bold',
        fontSize: 40,
        color: '#fff',
        lineHeight: 50,
        textAlign: 'center',
        paddingVertical: 15,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    navigationFilename: {
        marginTop: 5,
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
    }
});
