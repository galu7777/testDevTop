import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ctn_global: {
        flex: 1,
        // height: '100%',
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
    ctn_global_UI: {
        height: '55%'
    },
    ctn_UI: {
        // backgroundColor: 'red',
        height: '55%'
    },
    ctn_title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        width: '100%',
        // backgroundColor: 'blue'
    },
    ctn_linear: {
        paddingTop: '5%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '72%',
    },
    title: {
        color: '#EFEFEF',
        fontSize: 35.33,
        fontWeight: "600"
    },
    sub_title: {
        color: '#A4A4A4',
        fontSize: 12.33,
        fontWeight: "500"
    },
    ctn_inputs: {
        paddingTop: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: 'red'
    },
    ctn_input: {
        // backgroundColor: 'red', 
        width: '70%'
    },
    ctn_singup: {
        paddingTop: '4%',
        width: '70%'
    },
    btn_singup: {
        height: 45,
        borderWidth: .5,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ctn_btn_rs: {
        paddingTop: '5%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
        width: '65%',
        // backgroundColor: 'red'
    },
    btn_rs: {
        height: 50,
        width: 63,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#B6B6B6',
        borderWidth: 1,
        borderRadius: 15
    },
    btn_touch: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#A4A4A4',
        fontSize: 12.33,
        fontWeight: "500",
        paddingBottom: '1%'
        // padding: '3%'
    },
    input: {
        marginBottom: 10,
        backgroundColor: "#A4A4A4",
        borderColor: "#fff",
        borderWidth: .5,
        borderRadius: 10,
        color: '#fff',
        padding: 10,
        height: 45,
        width: '100%',
        // marginLeft: 15,
        // marginRight: 15,
        fontSize: 16,
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
        opacity: 0.58,
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

