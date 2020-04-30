import React, {Component,useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Animated,
    NativeModules,
    LayoutAnimation
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home_tab/Home';
import Community from './home_tab/Community';
import Interact from './home_tab/Interact';
import My from './home_tab/My';
import Video from './Video';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
import {StackHeaderOptions} from '../common/CommonConfiguration';

function HomeTabs() {
    let scaleValue = new Animated.Value(0)
    let scaleAnimate=()=>{
        scaleValue.setValue(0)
        Animated.timing(scaleValue,{
            toValue:1,
            duration:200,
            useNativeDriver:true
        }).start()
    }
    return (
        <Tab.Navigator
            screenOptions={({route}) => {
                return ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconSource;
                        let iconPath = "../images/tab_icon/"
                        let scale =scaleValue.interpolate({
                            inputRange:[0,1],
                            outputRange:[0.8,1]
                        })
                        scaleAnimate()
                        switch (route.name) {
                            case 'Home':
                                iconSource = focused ? require(iconPath+'icon_home_active.png') : require(iconPath+'icon_home.png');
                                break;
                            case 'Community':
                                iconSource = focused ? require(iconPath+'icon_community_active.png') : require(iconPath+'icon_community.png');
                                break;
                            case 'Interact':
                                iconSource = focused ? require(iconPath+'icon_interact_active.png') : require(iconPath+'icon_interact.png');
                                break;
                            case 'My':
                                iconSource = focused ? require(iconPath+'icon_my_active.png') : require(iconPath+'icon_my.png');
                                break;
                            default:
                        }
                        if (focused){
                            return (
                                <Animated.Image
                                    source={iconSource}
                                    size={size}
                                    color={color}
                                    style={{transform:[{scale:scale}]}}
                                ></Animated.Image>
                            )
                        }
                        return (
                            <Image
                                source={iconSource}
                                size={size}
                                color={color}
                            ></Image>
                        );
                    },
                });

            }}
            tabBarOptions={{
                activeTintColor: '#333333',
                inactiveTintColor: '#666666'
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{title: '首页'}}
            ></Tab.Screen>
            <Tab.Screen
                name={'Community'}
                component={Community}
                options={{title: '社区'}}
            ></Tab.Screen>
            <Tab.Screen
                name={'Interact'}
                component={Interact}
                options={{title: '互动'}}
            ></Tab.Screen>
            <Tab.Screen
                name={'My'}
                component={My}
                options={{title: '我的'}}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

function HomeScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={'Home'}
                component={Home}
                options={{
                    title: '首页',
                    headerShown:false
                }}
            />
        </HomeStack.Navigator>
    );
}

export default class Root extends Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={StackHeaderOptions}
                >
                    <Stack.Screen
                        name={'HomeTab'}
                        component={HomeTabs}
                        options={{
                            headerShown: false
                        }}
                    ></Stack.Screen>
                    <Stack.Screen
                        name={'Video'}
                        component={Video}
                        options={{title: '视频'}}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
