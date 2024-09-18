import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartFooter = ({ cartData }) => {
  const Navigation = useNavigation();

  const handleOrder = () => {
    if (cartData.length === 0) {
      Alert.alert('Thông báo', 'Giỏ hàng của bạn đang trống.');
      return;
    }

    Alert.alert(
      'Xác nhận đặt hàng',
      'Bạn có muốn đặt hàng?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            // Xóa giỏ hàng và quay về trang chủ sau khi xác nhận đặt hàng
            clearCartAndNavigateHome();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const clearCartAndNavigateHome = async () => {
    try {
      
      Navigation.navigate('HomeScreem');
    } catch (error) {
      console.error('Lỗi khi xóa giỏ hàng:', error);
    }
  };

  const totalPrice = cartData.length > 0 ? cartData.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.payContainer}>
        <View style={styles.payTotal}>
          <Text style={styles.totalText}>Tổng Cộng: </Text>
          <Text style={styles.priceText}>{totalPrice}k</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buyButton, { backgroundColor: '#e31837' }]}
            onPress={() => {
              Navigation.navigate('MenuFood');
            }}
          >
            <Text style={styles.buyButtonText}>Thêm Món</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buyButton, { backgroundColor: '#e31837' }]}
            onPress={handleOrder}
          >
            <Text style={styles.buyButtonText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc522',
  },
 
  payContainer: {
    flex: 1,
  },
  payTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  totalText: {
    fontSize: 18,
  },
  priceText: {
    color: '#e31837',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buyButton: {
    width: '45%',
    backgroundColor: '#e31837',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartFooter;
