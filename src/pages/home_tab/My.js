import React,{Component} from 'react'
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';

export default class My extends Component {
    constructor(props){
        super(props)
    }
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <SafeAreaView>
                <Text>我的</Text>
            </SafeAreaView>
        )
    }
}
