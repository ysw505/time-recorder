import React from 'react';
import {StyleSheet, Text, View, Button, ToastAndroid} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
            text: "Start"
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button onPress={this.onPressSwitchButton.bind(this)} title={this.state.isStart ? "START" : "STOP"}></Button>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        height: 100,
                        padding: 20,
                    }}>

                    <View style={{flex: 0.5, padding: 5}}>
                        <Button onPress={() => this.finishTask.bind(this,123)} title="Task One"></Button>
                    </View>
                    <View style={{flex: 0.5, padding: 5}}>
                        <Button title="Task Two"></Button>
                    </View>

                </View>

            </View>
        );
    }

    finishTask(id) {
        ToastAndroid.show(id);
    }

    onPressSwitchButton() {
        this.setState((prevState, props) => ({
            isStart: !prevState.isStart
        }));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
