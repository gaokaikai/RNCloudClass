import {
    Platform
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';
import md5 from "react-native-md5";
const url = 'http://60.205.7.66:18859/'
const loginMark = DeviceInfo.getUniqueId()
const system = Platform.OS

export const sectionRandomList = 'section/randomlist'

export function md5Str(str) {
    return md5.hex_md5(str)
}
export function login(tel,password) {
    let data = {
        username:tel,
        password:password,
        deviceType:system == 'ios' ? 1 : 2
    }
    let requestUrl = url + "user/login"
    return new Promise((resolve, reject) => {
        fetch(requestUrl, {
            method: "POST",
            credentials: 'include',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginMark: loginMark,
                data: JSON.stringify(data)
            })

        })
            .then(response => response.json())
            .then(responseJson => {
                resolve(responseJson)
            })
            .catch(error => {
                console.log("请求地址"+requestUrl)
                console.log(error)
            })
    })
}
export function post(fetchUrl,param) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('userinfo', (err, res) => {
            if (res) {
                let resjson = JSON.parse(res);
                let token = resjson.token;
                let data = {}
                let requestUrl = url + fetchUrl
                fetch(requestUrl, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        loginMark: loginMark,
                        token: token,
                        data: JSON.stringify(param)
                    })

                })
                    .then(response => response.json())
                    .then(responseJson => resolve(responseJson))
                    .catch(error => {
                        reject(error)
                        console.log("请求地址"+requestUrl)
                        console.log(error)
                    })

            }
        })
    })
}
