import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const {
    set,
    neq,
    cond,
    eq,
    add,
    multiply,
    lessThan,
    spring,
    block,
    startClock,
    stopClock,
    clockRunning,
    sub,
    defined,
    Value,
    Clock,
    event,
} = Animated;

export default class Tracking extends React.Component {
    constructor(props) {
        super(props);

        const TOSS_SEC = 0.2;

        const dragX = new Value(0);
        const dragY = new Value(0);

        const gestureState = new Value(-1);
        const dragVX = new Value(0);
        const dragVY = new Value(0);

        this._onGestureEvent = event([
            {
                nativeEvent: {
                    translationX: dragX,
                    velocityX: dragVX,
                    velocityY: dragVY,
                    state: gestureState,
                    translationY: dragY,
                },
            },
        ]);

        const transX = new Value(0);
        const transY = new Value(0);
        const clock = new Clock();
        const prevDragX = new Value(0);
        const prevDragY = new Value(0);
        const snapPoint = cond(
            lessThan(add(transX, multiply(TOSS_SEC, dragVX)), 0),
            -(width / 2) + 15,
            (width / 2) - 15
        );

        const config = {
            damping: 25,
            mass: 1,
            stiffness: 80,
            overshootClamping: false,
            restSpeedThreshold: 0.1,
            restDisplacementThreshold: 0.6,
            toValue: snapPoint,
        };

        const state = {
            finished: new Value(0),
            velocity: dragVX,
            position: new Value(0),
            time: new Value(0),
        };

        this._transX = cond(
            eq(gestureState, State.ACTIVE),
            [
                stopClock(clock),
                set(transX, add(transX, sub(dragX, prevDragX))),
                set(prevDragX, dragX),
                transX,
            ],
            cond(neq(gestureState, -1), [
                set(prevDragX, 0),
                set(
                    transX,
                    cond(
                        defined(transX),
                        [
                            cond(clockRunning(clock), 0, [
                                set(state.finished, 0),
                                set(state.velocity, dragVX),
                                set(state.position, transX),
                                startClock(clock),
                            ]),
                            spring(clock, state, config),
                            cond(state.finished, stopClock(clock)),
                            state.position,
                        ],
                        0
                    )
                ),
            ])
        );

        this._transY = block([
            cond(
                eq(gestureState, State.ACTIVE),
                [
                    set(transY, add(transY, sub(dragY, prevDragY))),
                    set(prevDragY, dragY),
                ],
                set(prevDragY, 0)
            ),
            transY,
        ]);
    }

    render() {
        return (
            <PanGestureHandler maxPointers={1} onGestureEvent={this._onGestureEvent} onHandlerStateChange={this._onGestureEvent}>
                <Animated.View style={[
                    styles.container,
                    {
                        transform: [
                            { translateX: this._transX, translateY: this._transY },
                        ],
                    }
                ]}>
                    {this.props.children}
                </Animated.View>
            </PanGestureHandler>

        );
    }
}

const BOX_SIZE = 65;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: (height / 5),
        //right: (width / 3),
        width: BOX_SIZE,
        height: BOX_SIZE,
        alignSelf: 'center',
    },
});