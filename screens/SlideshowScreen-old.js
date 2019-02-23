import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Slideshow from 'react-native-slideshow';

export default class SlideshowTest extends Component {
    constructor(props) {
        super(props);
        /*
        dataSource1: [
            {
                title: 'Title 1',
                caption: '',
                url: require('../assets/slides/derechos_humanos/img1.jpg'),
            }, {
                title: 'Title 2',
                caption: '',
                url: require('../assets/slides/derechos_humanos/img2.jpg'),
            }, {
                title: 'Title 3',
                caption: '',
                url: require('../assets/slides/derechos_humanos/img1.jpg'),
            },
        ]

        dataSource2: [
            {
                title: 'Title 1',
                caption: '',
                url: require('../assets/slides/normatividad/img1.jpg'),
            }, {
                title: 'Title 2',
                caption: '',
                url: require('../assets/slides/normatividad/img2.jpg'),
            }, {
                title: 'Title 3',
                caption: '',
                url: require('../assets/slides/normatividad/img3.png'),
            },
            {
                title: 'Title 4',
                caption: '',
                url: require('../assets/slides/normatividad/img4.jpg'),
            },
        ]
        */

        this.state = {
            position: 0,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: '',
                    url: require('../assets/slides/normatividad/img1.jpg'),
                }, {
                    title: 'Title 2',
                    caption: '',
                    url: require('../assets/slides/normatividad/img2.png'),
                }, {
                    title: 'Title 3',
                    caption: '',
                    url: require('../assets/slides/normatividad/img3.png'),
                },
                {
                    title: 'Title 4',
                    caption: '',
                    url: require('../assets/slides/normatividad/img4.jpg'),
                },
            ],
        };


    }

    componentWillMount() {
        /*this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 10000)
        });*/
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View>
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stretch: {
        width: 50,
        height: 200
    }
});