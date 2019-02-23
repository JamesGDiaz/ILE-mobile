import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class SlideshowTest extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render(_data) {
        const dataSource1 = [
            require('../assets/slides/derechos_humanos/img1.jpg'),
            require('../assets/slides/derechos_humanos/img2.jpg'),
            require('../assets/slides/derechos_humanos/img1.jpg'),
        ]

        const dataSource2 = [
            require('../assets/slides/normatividad/img1.jpg'),
            require('../assets/slides/normatividad/img2.png'),
            require('../assets/slides/normatividad/img3.png'),
            require('../assets/slides/normatividad/img4.jpg'),
        ]
        _data = dataSource1
        return (< ImageSlider images={_data}
        />)
    }
}

const styles = StyleSheet.create({

});