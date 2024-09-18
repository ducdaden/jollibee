import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartBody = ({ cartData, updateCart }) => {
  
  const Navigation = useNavigation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ AsyncStorage khi component được mount
    getData();
  }, []);

  const getData = async () => {
    try {
      // Lấy dữ liệu từ AsyncStorage
      const jsonValue = await AsyncStorage.getItem('cart');
      if (jsonValue !== null) {
        setCart(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
    }
  };
  const removeFromCart = async (indexToRemove) => {
    // Hiển thị cảnh báo xác nhận trước khi xóa sản phẩm
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Hủy xóa sản phẩm'),
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: async () => {
            const updatedCart = [...cart];
            updatedCart.splice(indexToRemove, 1); // Xóa sản phẩm khỏi giỏ hàng dựa trên index

            setCart(updatedCart);

            // Lưu dữ liệu vào AsyncStorage sau khi xóa sản phẩm
            try {
              await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
            } catch (error) {
              console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', error);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    saveData(updatedCart);
    updateCart(updatedCart); // Gọi hàm cập nhật giỏ hàng
  };
  
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      saveData(updatedCart);
      updateCart(updatedCart); // Gọi hàm cập nhật giỏ hàng
    }
  };
  const saveData = async (updatedCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {cart.map((selectedProduct, index) => (
          <View key={index} style={styles.productItem}>
            <Image
              source={{ uri: selectedProduct.img }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{selectedProduct.name}</Text>
              <Text style={styles.productPrice}>{selectedProduct.price}k</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{selectedProduct.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(index)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                  <Text style={styles.removeButton}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#ddd',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#e31837',
  },
  quantityButton: {
    backgroundColor: '#e31837',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  quantity: {
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 0.75,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default CartBody;
