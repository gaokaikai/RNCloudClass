import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image
} from 'react-native';
import FastImage from 'react-native-fast-image'

import {commonStyles} from './CommonStyles';
import * as c from './ScreenUtil'

// 1.状态栏
export function CustomStatusBar() {

    return (
        <StatusBar barStyle="light-content"/>
    );

}
// 2.分割线
export function CustomSeparator({height}) {

    return (
        <View
            style={[styles.separator, {height: height}]}
        ></View>
    );

}
// 3.text 去除android padding
export function CustomText(props) {

    return (
        <Text
            {...props}
            includeFontPadding={false}
        >{props.children}</Text>
    );

}
// 3.课程头部
export function CourseHeader(props) {
    return(
        <View
            style={[commonStyles.flexRow,commonStyles.alignItemsC,{height:c.fixPx(40)}]}
        >
                <View
                    style={[commonStyles.flexRow,commonStyles.alignItemsC,{flex:1}]}
                >
                    <Image
                        source={require('../images/icon/icon_star.png')}
                    ></Image>
                    <CustomText
                        style={[commonStyles.flex1,styles.courseTitle]}
                    >每日推荐课程:</CustomText>
                </View>

            <View
                style={commonStyles.flexRow}
            >
                <CustomText
                    style={styles.moreBtnLabel}
                >查看更多</CustomText>
                <Image
                    source={require('../images/icon/icon_morebtn.png')}
                ></Image>
            </View>
        </View>
    )
}
// 4.课程item
export function CourseItem(props) {
    return(
        <View
            style={styles.courseContainer}
        >
            <FastImage
                source={{uri:props.ImagePath}}
                style={styles.coursePreview}
            ></FastImage>
            <Text
                style={styles.detailTitle}
            >{props.F_SectionName}</Text>
            <Text>
                <Text>{props.F_PlayCount}</Text>
                人已学习
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#eeeeee',
    },
    courseTitle:{
        fontSize:c.fixFont(30),
        color:'#333333'
    },
    moreBtnLabel:{
        fontSize: c.fixFont(20),
        color:'#666666'
    },
    coursePreview:{
        width:c.fixPx(320),
        height:c.fixPx(200)
    },
    courseContainer:{
        width:c.fixPx(320),
        marginTop:c.fixPx(30)
    },
    detailTitle:{
        fontSize:c.fixFont(26),
        color:'#333333',
        marginVertical:c.fixPx(20)
    },
});
