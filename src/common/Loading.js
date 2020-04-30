import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StatusBar,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    Modal,
    Alert,
Animated
} from 'react-native';

import * as c from './ScreenUtil';

const styles = StyleSheet.create({
    content: {

        flex: 1
    },
    modalview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0)",
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex: 999
    },
    tipview: {
        width: c.fixPx(180),
        height: c.fixPx(130),
        borderRadius: 5,
        backgroundColor: "#fefdfd",
        alignItems: 'center',
        // opacity: 0.8
    },
    tiptitle: {
        fontSize: 15,
        lineHeight: c.fixPx(35),
        color: "#333333",
        fontWeight: 'bold'
    },
    tipmsg: {
        fontSize: 15,
        color: "#666666",
        lineHeight: c.fixPx(30),
    },
    tipbtn: {
        width: c.fixPx(250),
        height: c.fixPx(45),
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
    },
    btntext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#1fbcfb",
        alignSelf: 'center',
        lineHeight: c.fixPx(45)
    }
})
export default class Loading extends Component {
    constructor(props) {
        super(props);

            this.fadeAnim = new Animated.Value(0.2),  // 透明度初始值设为0

        this.animate=Animated.timing(                  // 随时间变化而执行动画
            this.fadeAnim,            // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 2000,              // 让动画持续一段时间
                useNativeDriver: true, // <-- 加上这一行,
            }
        )
        this.animatereverse=Animated.timing(                  // 随时间变化而执行动画
            this.fadeAnim,            // 动画中的变量值
            {
                toValue: 0.2,                   // 透明度最终变为1，即完全不透明
                duration: 2000,              // 让动画持续一段时间
                useNativeDriver: true, // <-- 加上这一行,
            }
        )
    }


    componentDidMount() {

        Animated.loop(Animated.sequence([this.animate,this.animatereverse])).start();
                                // 开始执行动画
    }


    render() {

        return (

            <View
                style={styles.modalview}
            >
                <View
                    style={styles.tipview}
                >
                    <Animated.Image
                        source={require('../images/app/loading.png')}
                        style={{opacity:this.fadeAnim}}
                    ></Animated.Image>
                    <Text>加载中...</Text>
                </View>
            </View>


        )
    }
}
