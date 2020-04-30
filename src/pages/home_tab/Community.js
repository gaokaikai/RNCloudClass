import React,{Component} from 'react'
import {
    View,
    Text,
    SafeAreaView, TouchableOpacity,
} from 'react-native';
import {observer,inject} from 'mobx-react';


@inject('AppStore')
@observer
export default class Community extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(): void {

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <SafeAreaView>
                <Text>社区</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.push('Video')
                    }}
                >
                    <Text>跳转Video</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
