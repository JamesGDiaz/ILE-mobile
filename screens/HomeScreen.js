import React from 'react';
import { Image, Platform, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const config = {
            velocityThreshold: 0.4,
            directionalOffsetThreshold: 50
        }

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    style={{ flex: 1, }}
                    onPress={() => (this.props.navigation.navigate('Links'))}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                        <View style={styles.welcomeContainer}>
                            <Image
                                source={require('../assets/images/icon.png')}
                                style={styles.welcomeImage}
                            />
                        </View>
                        <Text style={styles.titleText}>
                            Manual para la toma de decisiones en el acompañamiento de la Interrupción legal del embarazo
                        </Text>
                        <Ionicons style={{ flex: 0.2 }} name="md-menu" size={45} color="#eee" />
                        <Text style={styles.getStartedText}>
                            Toca la pantalla y{"\n"} selecciona un tema.
                            </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c060f0'
    },
    welcomeContainer: {
        alignItems: 'center',
        paddingTop: 20,
        marginTop: 15,
        marginBottom: 17,
    },
    welcomeImage: {
        width: 180,
        height: 140,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    getStartedText: {
        flex: 1,
        fontFamily: 'quicksand-book',
        fontSize: 22,
        color: '#f7f7f7',
        lineHeight: 26,
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },
    titleText: {
        fontFamily: 'quicksand-book',
        fontSize: 28,
        color: '#fff',
        lineHeight: 38,
        textAlign: 'center',
        paddingVertical: 15,
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 15
    },
});
