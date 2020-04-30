import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Video extends Component {
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View>
                <Text>video</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('HomeTab')
                    }}
                >
                    <Text>跳转Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
