import {StyleSheet} from 'react-native'
const styles= StyleSheet.create({
    logincontainer:{
        flex:1,
        
    },
    inputLogin:{
        flex:2,
        backgroundColor:'#e31837',
        justifyContent:'center',
        alignItems:'center'
    },
    textQMK:{
        paddingTop:14,
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    tilte:{
        color:'white',
        fontSize: 25,
    },
    inputcontainer:{
        width:'80%',
        paddingVertical:10,
    },
    input:{
        height:44,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:16,
    },
    btnLogin:{
        backgroundColor:'#ffc522',
        alignItems:'center',
        flex:1,
    },
    btncontainer:{
        backgroundColor: '#e31837',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        height:44,
        width:'80%',
        marginTop:30,
        
    },
    btnDangNhap :{
        textAlign:"center",
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        height:'100%',
        width:'100%',
        
    },
    textTVM:{
        paddingTop:14,
        color:'#000',
        fontSize:16,
        fontWeight:'bold'
    },
    btnDangKy:{
        textAlign:"center",
        fontSize:16,
        fontWeight:'bold',
        textDecorationLine: 'underline',
    }
})

export default styles;