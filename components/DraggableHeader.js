import React, { Component } from 'react';
import {
    StyleSheet, View, Dimensions, Image, Text,
    Animated, Platform, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import iconClaw from '../assets/images/icon_claw.png'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default class DraggableHeader extends Component {
    render() {
        return (
            <View style={styles.cart_layout}>
                <View style={styles.cart_detail}>
                    <Image style={styles.icon_claw} source={iconClaw} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.HeaderText}>{this.props.text}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cart_layout: {
        backgroundColor: '#ededed',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        height: 56,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#707070',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginHorizontal: 8,
    },
    cart_detail: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 52,
        //justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon_claw: {
        width: 32,
        height: 8,
        marginVertical: 3,
    },
    HeaderText: {
        color: '#313131',
        fontFamily: 'quicksand-book',
        fontSize: 18,
        textAlign: 'center',

        //marginHorizontal: 20,
        //marginVertical: 5,
    },
})