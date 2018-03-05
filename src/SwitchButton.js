import React, {Component}from 'react';
import {StyleSheet, Text, View, Button, ToastAndroid} from 'react-native';

export default class SwitchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Start"
        }
    }

    render() {
        return (
            <Button onPress={onPressSwitchButton} title={this.state.text}></Button>
        );
    }
}


const onPressSwitchButton = () => {
    "use strict";
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
}