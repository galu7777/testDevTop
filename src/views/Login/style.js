import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ctn_global: {
        height: '100%',
        backgroundColor: '#000'
    },
    ctn_frames: {
        display: 'flex',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    ctn_illustration: {
        height: '13%',
    },
    ctn_img:{
        position: 'absolute',
        zIndex: 1,
        height: 200,
        width: 200,
        right: '13%',
        top: '-150%',
    },
    ctn_login_info: {
        height: '100%',
        borderRadius: 50,
        bottom: '27%'
    },
    ctn_UI: {
        height: '55%'
    },
    ctn_circles: {
        height: '45%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    ellipseContainerOrange: {
        width: 200,
        height: 200,
        top: '15%',
        left: '-30%',
        borderRadius: 100,      
        // opacity: 0.58,
    },
    ellipseContainerPurpple: {
        width: 200,
        height: 200,
        top: '15%',
        right: '-30%',
        borderRadius: 100,      
        // opacity: 0.58,
    },
    absolute: {
        position: 'absolute'
    },
});