import React,{Component} from 'react'
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';

export default class Interact extends Component {
    constructor(props){
        super(props)
    }
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <SafeAreaView>
                <Text>互动</Text>
            </SafeAreaView>
        )
    }
}
