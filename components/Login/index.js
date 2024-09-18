import React, { useState } from 'react';
import { View, Text, TextInput, Image, onPress,TouchableOpacity,Alert  } from 'react-native';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import userData from './acc.json'

const LoginForm = () => {
const [sdt, setSdt] = useState('');
const [password, setPassword] = useState('');
const Navigation = useNavigation();
const onClickLogin = async () => {
    const user = userData.find((user) => user.sdt === sdt && user.password === password);

    if (user) {
      try {
        // Lưu thông tin người dùng vào AsyncStorage khi đăng nhập thành công
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
        Alert.alert('Đăng nhập thành công');
        Navigation.navigate('HomeScreem');
      } catch (error) {
        console.error('Lỗi khi lưu thông tin người dùng:', error);
      }
    } else {
      Alert.alert('Đăng nhập thất bại', 'Số điện thoại hoặc mật khẩu không đúng');
    }
  };

  return (
      <View style={styles.logincontainer}>
          <View style={styles.inputLogin}>
              <Image  style={{width: 150, height: 150}} source={require('../Login/logo.png')   }/>
              <Text style={styles.tilte}>VUI LÒNG ĐĂNG NHẬP</Text>
                  <View style={styles.inputcontainer}>
                      <TextInput  
                      placeholder="Số điện thoại" 
                      onChangeText={(text) => setSdt(text)}
                      value={sdt} 
                      style={styles.input}/>
                  </View>
                  <View style={styles.inputcontainer}>
                       <TextInput  
                       placeholder="Mật khẩu"
                       onChangeText={(text) => setPassword(text)}
                      value={password}
                      secureTextEntry={true} 
                       style={styles.input}/>
                  </View>
              <TouchableOpacity>
                  <Text style={styles.textQMK}>Quên mật khẩu?</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.btnLogin}>
          <TouchableOpacity style={styles.btncontainer} onPress={onClickLogin}>
                      <Text style={styles.btnDangNhap}>Đăng nhập</Text>
              </TouchableOpacity>
              <View style={styles.register}>
                  <Text style={styles.textTVM}>Bạn là thành Viên mới?</Text>
                  <TouchableOpacity>
                      <Text style={styles.btnDangKy}>Đăng ký ngay</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    );
};

export default LoginForm;