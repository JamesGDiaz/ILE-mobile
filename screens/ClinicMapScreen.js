import React from 'react';
import { StyleSheet, View, ScrollView, Text, Platform, Switch, Image, StatusBar, Button } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { MapView, Location, Permissions } from 'expo';
const { Marker } = MapView;
import uuid from 'uuid';
import Providers from '../components/ServiceProviders';

export default class ClinicMapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchState: true,
            location: null,
            region: {
                latitude: 19.40186013,
                longitude: -99.14032829,
                latitudeDelta: 0.45,
                longitudeDelta: 0.45,
            },
            providers: Providers,
        }
    }

    static navigationOptions = {
        title: 'Mapas',
        headerStyle: {
            backgroundColor: '#89cef0',
        }
    }

    _onRegionChange = (region) => {

    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            this.setState({
                location: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }
            });
            //console.log(location)
        } else {
            throw new Error('Permisos de ubicacion no fueron otorgados.');
        }
    }

    componentWillMount() {
        this._getLocationAsync();
        StatusBar.setHidden(false);
        //console.log(this.state.providers)
    }

    populateScrollView() {
        return (
            this.state.providers.map((provider, index) => (
                <View style={styles.option} key={provider.key}>
                    <View style={styles.optionIconContainer}>
                        <Image
                            source={provider.icon}
                            resizeMode="contain"
                            style={{ width: 28, height: 28 }}
                        />
                    </View>
                    <Text style={styles.optionText}>{provider.name}</Text>
                    <Switch style={{ flex: 0.4, marginRight: 20, marginLeft: 30 }}
                        onValueChange={() => (
                            Providers[index].markersAreVisible = !Providers[index].markersAreVisible,
                            this.setState({ providers: Providers })
                        )}
                        value={this.state.providers[index].markersAreVisible}
                        thumbColor={'#45b2e7'}
                        trackColor={{ true: '#acdcf4', false: '#bdbdbd' }} />
                </View>
            ))
        )
    }

    populateMarkers(provider) {
        if (provider.markersAreVisible == true) {
            return (
                provider.markers.map((marker) => (
                    <Marker
                        key={uuid.v4()}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        image={provider.icon}
                    />
                ))
            )
        } else return (null)
    }

    render() {
        return (
            <View style={styles.containerView}>
                <MapView
                    style={styles.containerMap}
                    region={this.state.region}
                    onRegionChange={this._onRegionChange}
                    showsBuildings={false}
                    showsUserLocationButton={true}
                    showsTraffic={false}
                    loadingEnabled={true}
                >
                    {this.state.providers.map((provider) => (
                        this.populateMarkers(provider)
                    ))}

                </MapView>
                <View style={{
                    flex: 0.15,
                    backgroundColor: '#cfebf9',
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderTopColor: '#0d0d0d',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: '#707070',
                        fontFamily: 'quicksand-book',
                        fontSize: 17,
                        marginLeft: 25,
                    }}>Entidades mostradas:</Text>
                </View>

                <ScrollView style={styles.scrollView}>
                    {this.populateScrollView()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#e0f2fb'
    },
    scrollView: {
        flex: 0.3,
        flexDirection: 'column',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#bdbdbd'
    },
    containerMap: {
        flex: 1.5,
    },
    containerList: {
        flex: 1
    },
    optionIconContainer: {
        flex: 0.2,
        marginHorizontal: 9,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        //marginBottom: 6,
        paddingVertical: 8,
        //backgroundColor: '#fdfdfd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#bdbdbd',
    },
    optionText: {
        flex: 2,
        color: '#707070',
        fontFamily: 'quicksand-book',
        fontSize: 17,
        marginLeft: 10,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box1: {
        flex: 0.8,
        fontSize: 28,
        backgroundColor: '#ef7f89'
    },
    box2: {
        flex: 1,
        backgroundColor: '#ad7fef'
    },
    locationIconContainer: {
        marginRight: 5,
        marginTop: 5,
    },
})