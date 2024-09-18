import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileForm = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image  style={{width: 150, height: 150, borderRadius: 50}} source={require('./avamitchan.jpg')   }/>
        <Text style={styles.userName}>Ni cô lát kết</Text>
        <Text style={styles.editProfile}>Chỉnh sửa tài khoản</Text>
        <View style={styles.btnLogout}>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>1</Text>
                </View>
                <Text style={styles.content}>Ưu đãi của tôi</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>2</Text>
                </View>
                <Text style={styles.content}>Danh sách đơn hàng</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.content}>Địa chỉ giao hàng</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>4</Text>
                </View>
                <Text style={styles.content}>Hỗ trợ</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>5</Text>
                </View>
                <Text style={styles.content}>Chính sách bảo vệ và thông tin</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.number}>6</Text>
                </View>
                <Text style={styles.content}>Cài đặt</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e31837',
    },
    userName:{
        color:'white',
        fontWeight:'bold',
        fontSize:23,
    },
    editProfile:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    },
    item:{
        flexDirection:'row',
        backgroundColor:'#fff',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingVertical: 12,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'space-between',
      },
      square:{
        width: 48,
        height: 36,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e31837',
    
      },
      number:{
        fontSize: 16,
        fontWeight: '700',
        color:'white',
    
      },
      content:{
        fontSize:16,
        width:'80%',
    
      }
});

export default ProfileForm;