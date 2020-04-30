import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-community/async-storage';
import {inject} from 'mobx-react';
import * as c from '../../common/ScreenUtil';
import {commonStyles} from '../../common/CommonStyles';
import {CustomSeparator, CustomText, CourseHeader, CourseItem} from '../../common/CommonComponent';
import {login, md5Str, post, sectionRandomList} from '../../common/Api';
import Loading from '../../common/Loading';

@inject('AppStore')
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            courseData:[]
        }
    }

    componentDidMount(): void {
        // this.setLogin()
        this.getDailyCourse()
    }
    setLogin=()=>{
        let tel = '15135769652'
        let pwd = md5Str('123456')
        login(tel,pwd)
            .then(res=>{
                if (res.code == 200) {
                    let logininfo = {
                        tel: tel,
                        pwd: pwd
                    }
                    let data = res.data;
                    AsyncStorage.setItem("userinfo", JSON.stringify(data));
                    AsyncStorage.setItem("logininfo", JSON.stringify(logininfo));
                } else {
                    this.props.AppStore.toast.show(res.info)
                }
            })
    }
    getDailyCourse=()=>{
        this.setState({
            isLoading:true
        })
        post(sectionRandomList,{})
            .then(res=>{
                this.setState({
                    isLoading:false
                })
                if (res.code==200){
                    this.setState({
                        courseData:res.data
                    })
                }
            })
            .catch(err=>{
                this.setState({
                    isLoading:false
                })
            })
    }
// 1.轮播图
    homeSwiper = () => {
        let swiperImgPath = '../../images/home_swiper/';
        let arr = [
            require(swiperImgPath + 'swiper1.png'),
            require(swiperImgPath + 'swiper2.png'),
            require(swiperImgPath + 'swiper3.png'),
            require(swiperImgPath + 'swiper4.png'),
        ];
        let swiperComponent = [];
        arr.forEach((value, index) => {
            swiperComponent.push(
                <Image
                    key={index}
                    source={value}
                    style={styles.swiperImg}
                    resizeMode={'stretch'}
                ></Image>,
            );
        });
        return (
            <View
                style={styles.swiperContainer}
            >
                <Swiper
                    loop={true}
                    autoplay={true}
                    removeClippedSubviews={false}
                >
                    {swiperComponent}
                </Swiper>
            </View>
        );
    };
    // 2.首页按钮
    homeBtns = () => {
        let iconPath = '../../images/icon/';
        let arr = [
            {
                title: '学习',
                icon: require(iconPath + 'icon_study.png'),
            }, {
                title: '测试',
                icon: require(iconPath + 'icon_test.png'),
            }, {
                title: '工作室',
                icon: require(iconPath + 'icon_workroom.png'),
            }, {
                title: '记录本',
                icon: require(iconPath + 'icon_notebook.png'),
            },
        ];
        let homeBtnsComponent = arr.map((value, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.btnView}
                >
                    <View
                        style={styles.imgRadiusView}
                    >
                        <Image
                            source={value.icon}
                        ></Image>
                    </View>
                    <CustomText
                        style={styles.btnLabel}
                    >{value.title}</CustomText>
                </TouchableOpacity>
            );
        });
        return (
            <View
                style={styles.btnsContainer}
            >
                {homeBtnsComponent}
            </View>
        );
    };
    // 3.每日推荐课程
    dailyCourse=()=>{
        let {courseData} = this.state
        let courseComponent = courseData.map(value=>{
            return(
                <CourseItem
                    key={value.F_SectionId}
                    {...value}
                ></CourseItem>
            )
        })
        return(
            <View
                style={styles.courseContainer}
            >
                <CourseHeader></CourseHeader>
                <View
                    style={styles.courseContent}
                >
                    {courseComponent}
                </View>
            </View>
        )
    }
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {isLoading} = this.state
        return (
            <SafeAreaView
                style={commonStyles.areaView}
            >
                <View
                    style={commonStyles.containerView}
                >
                    <ScrollView>
                        {this.homeSwiper()}
                        {this.homeBtns()}
                        <CustomSeparator
                            height={c.fixPx(20)}
                        ></CustomSeparator>
                        {this.dailyCourse()}
                    </ScrollView>
                </View>

                {isLoading?<Loading></Loading>:null}
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    swiperContainer: {
        height: c.fixPx(460),
    },
    swiperImg: {
        height: '100%',
        width: '100%',
    },
    imgRadiusView: {
        width: c.fixPx(120),
        height: c.fixPx(120),
        borderRadius:c.fixPx(60),
        backgroundColor: '#1fbcfb',
        alignItems:'center',
        justifyContent:'center'
    },
    btnLabel:{
        lineHeight:c.fixPx(70),
        fontSize:c.fixFont(24),
        color:'#333333',
        textAlign: 'center'
    },
    btnView:{
        width:c.fixPx(120)
    },
    btnsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:c.fixPx(40),
        paddingVertical:c.fixPx(50)
    },
    courseContainer:{
        paddingHorizontal: c.fixPx(40),
        paddingVertical: c.fixPx(30)
    },
    courseContent:{
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
});
