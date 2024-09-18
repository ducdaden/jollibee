import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PromotionHeader = () => {
    const Navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={()=>{
                Navigation.navigate('HomeScreem');
              }}>
            <Image
            source={require('./left-arrow.png')}
            style={styles.icon}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.title}> 
        <Text style={styles.titleText}>KHUYẾN MÃI</Text>
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
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 10,
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

export default PromotionHeader;