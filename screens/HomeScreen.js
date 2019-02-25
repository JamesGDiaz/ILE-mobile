import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import GestureRecognizer from 'react-native-swipe-gestures';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    navigateToLinks(gestureState) {
        this.props.navigation.navigate('Links');
    }

    render() {
        const config = {
            velocityThreshold: 0.6,
            directionalOffsetThreshold: 60
        }

        return (
            <GestureRecognizer
                onSwipeUp={(state) => this.navigateToLinks(state)}
                onSwipeLeft={(state) => this.navigateToLinks(state)}
                config={config}
                style={styles.container}
            >
                <LinearGradient colors={['#b749ee', '#dca6f7']} style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                        <View style={styles.welcomeContainer}>
                            <Image
                                source={require('../assets/images/icon.png')}
                                style={styles.welcomeImage}
                            />
                        </View>
                        <View style={styles.getStartedContainer}>

                            <Text style={styles.welcomeText}>
                                Interrupción Legal del Embarazo
            </Text>
                        </View>

                        <Text style={styles.getStartedText}>Desliza hacia arriba o a la izquierda y{"\n"} selecciona un tema.</Text>

                    </ScrollView>
                </LinearGradient>
            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundLinearGradientStyle: {
        width: '100%',
        flex: 1
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
    getStartedText: {
        fontFamily: 'quicksand-book',
        fontSize: 22,
        color: '#f7f7f7',
        lineHeight: 30,
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
});
