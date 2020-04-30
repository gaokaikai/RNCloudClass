/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import WrapperComponent from './src/common/WrapperComponent';
import * as c from './src/common/ScreenUtil';

import {Provider} from 'mobx-react';
import Toast from 'react-native-easy-toast';
import Store from './src/mobx/Store'
import Root from './src/pages/Root'
import {CustomStatusBar} from './src/common/CommonComponent';

@WrapperComponent
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View
                style={styles.container}
            >
                <CustomStatusBar></CustomStatusBar>
                <Provider
                    {...Store}
                >
                    <Root></Root>
                </Provider>
                <Toast ref={param => Store.AppStore.initToast(param)}></Toast>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
