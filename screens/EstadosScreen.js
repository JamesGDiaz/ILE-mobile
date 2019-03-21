import React from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, FlatList, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import SlideshowModalScreen from './SlideshowModalScreen';
import ListaDeEstados from '../components/ListaDeEstados'

export default class EstadosScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        text: '',
        estados: Estados, //from ListaDeEstados
        SlideshowComponent: {
            modalVisible: false,
            images: [null],
        }
    }
    static navigationOptions = {
        title: 'Estados',
        headerStyle: {
            backgroundColor: '#efad7f',
        },
    }

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    hideStatusBar = () => {
        console.log('Hiding StatusBar')
        StatusBar.setHidden(true);
    }

    //To bind the state of this Screen with the SlideshowModalScreen's visible prop
    updateState(data) {
        this.setState(data);
    }

    showSlideshowComponent(uris) {
        console.log('Hiding StatusBar...');
        StatusBar.setHidden(true);
        this.setState({ SlideshowComponent: { images: uris, modalVisible: true } })
    }

    SearchFilterFunction(text) {
        const newData = Estados.filter(function (item) {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            return itemData.indexOf(text.toUpperCase()) > -1;
        });
        this.setState({
            estados: newData,
            text: text,
        });
    }

    render() {
        return (
            <LinearGradient colors={['#f8dac5', '#fae5d6']} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <Ionicons name={Platform.OS === 'android' ? "md-search" : "ios-search"} size={30} color='#909090' style={styles.searchIcon}></Ionicons>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.SearchFilterFunction(text)}
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                            placeholder="Buscar estado"
                        />
                    </View>
                    <FlatList
                        data={this.state.estados}
                        ItemSeparatorComponent={() => (<View style={styles.separator} />)}
                        renderItem={({ item }) => (
                            <Touchable
                                style={styles.touchableContent}
                                background={Touchable.Ripple('#fff', false)}
                                onPress={() => (
                                    this.showSlideshowComponent(item.images)
                                )}>
                                <View style={styles.option}>

                                    <Text style={styles.optionText}>{item.name}</Text>
                                </View>
                            </Touchable>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <SlideshowModalScreen
                    images={this.state.SlideshowComponent.images}
                    visible={this.state.SlideshowComponent.modalVisible}
                    updateParentState={this.updateState.bind(this)} />
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    option: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 12,
    },
    optionText: {
        flex: 1,
        color: '#707070',
        fontFamily: 'quicksand-book',
        fontSize: 16,
    },
    touchableContent: {
        flex: 1,
    },
    separator: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#bdbdbd',
        flex: 1,
        marginHorizontal: 20
    },
    searchContainer: {
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        paddingLeft: 5,
        borderColor: '#909090',
        borderRadius: 10,
        backgroundColor: '#ddd',
        marginHorizontal: 8,
        marginTop: 8,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    textInput: {
        flex: 1,
        fontFamily: 'quicksand-book',
        fontSize: 16,
        textAlign: 'left',
        color: '#707070',
    },
    searchIcon: {
        width: 30,
        margin: 5
    }
});