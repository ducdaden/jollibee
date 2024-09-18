import React,{useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Header = () => {
  const Navigation = useNavigation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Lấy thông tin người dùng từ AsyncStorage
    const getLoggedInUserData = async () => {
      try {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (user) {
          const parsedUser = JSON.parse(user);
          setUserName(parsedUser.username); // Đặt tên người dùng vào state để hiển thị trong Header
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
      }
    };

    getLoggedInUserData();
  }, []);
  return (
    <View style={styles.headerContainer}>
      
      <View style={styles.userInfo}>
        <TouchableOpacity  onPress={()=>{
                Navigation.navigate('ProfileScreem');
              }}>
            <Image
            source={require('./avamitchan.jpg')}
            style={styles.avatar}
        />
        </TouchableOpacity>
        
        <View style={styles.Name}>
            <Text style={styles.username}>{userName}</Text>
        </View>
        
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
            <Image
            source={require('./bell.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                Navigation.navigate('ShoppingCart');
              }}>
             <Image
            source={require('./shopping-cart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
         
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    
    paddingHorizontal:10,
    paddingTop:40,
    paddingBottom:20,
    backgroundColor: '#e31837',

    borderWidth:0.5,
    shadowColor: 'black', // Màu bóng đổ
    shadowOffset: { width: 0, height: 2 }, // Độ lệch của bóng đổ
    shadowOpacity: 0.4, // Độ trong suốt của bóng đổ
    shadowRadius: 4, // Bán kính của bóng đổ
    elevation: 4, // (Chỉ cho Android) Độ đổ bóng
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  username: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  Name:{
    paddingTop:10,
    paddingLeft:10,
  },
  iconsContainer: {
    paddingRight:10,
    flexDirection: 'row',
    marginTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default Header;