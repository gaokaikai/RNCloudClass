import React,{Component} from 'react'


const WrapperComponent=(InitialComponent)=>class extends Component{
    constructor(props){
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (

                <InitialComponent
                    {...this.props}
                    {...this.state}
                ></InitialComponent>
        )
    }
}
export default WrapperComponent
