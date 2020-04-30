import {
    Dimensions,
    PixelRatio
} from 'react-native'
// 屏幕宽度
export const {width:screenW,height:screenH} = Dimensions.get('window')
// 转换
export const px2dp = px => PixelRatio.roundToNearestPixel(px)
export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp)
// 屏幕倍率
export const screenS = PixelRatio.get()
// 字体倍率
export const fontS = PixelRatio.getFontScale()
// 屏幕分辨率
export const screenPW = dp2px(screenW)
export const screenPH = dp2px(screenH)
// 设计图大小
const designW = 750
const designH = 1334
// 比例
const scaleW = screenPW/designW
const scaleH = screenPH/designH
const scale = Math.min(scaleW,scaleH)

// 适配屏幕宽度
export function fixPx(px) {
 return px2dp(px*scaleW/screenS)
}
// 字体适配
export function fixFont(px) {
    return px2dp((px*scale)/(screenS*fontS))
}
