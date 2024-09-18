import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const Navigation = useNavigation();
  return (
    
    <View style={styles.bodyContainer}>
      <Swiper style={styles.swiper} showsButtons={false}>
        <View style={styles.slide}>
          <Image
            source={require('./image1.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./image2.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./image3.jpg')}
            style={styles.image}
          />
        </View>
      </Swiper>
        <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={()=>{
                Navigation.navigate('PromoScreem');
              }}>
                <Image
                    source={require('./price-tag.png')}
                    style={styles.icon}
                />
            <Text style={styles.itemText}>Khuyến mãi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={()=>{
                Navigation.navigate('MenuFood');
              }}>
                <Image
                    source={require('./food.png')}
                    style={styles.icon}
                />
            <Text style={styles.itemText}>Thực đơn</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.item}>
                <Image
                    source={require('./order.png')}
                    style={styles.icon}
                />
            <Text style={styles.itemText}>Gần đây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image
                    source={require('./store.png')}
                    style={styles.icon}
                />
            <Text style={styles.itemText}>Cửa hàng</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  swiper: {
    height: 360,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  //slide do len
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc522',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    backgroundColor: '#e31837', 
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical:2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  itemText: {
    fontWeight:'bold',
    color: 'white',
    fontSize: 18,
  },
  icon: {
    width: 50, 
    height: 50,
    marginBottom: 10, 
  },
});

export default Body;
  