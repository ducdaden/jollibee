import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DTHeader = () => {
  const productsData = require('../MenuFood/food.json');
  const Navigation = useNavigation();
  const Route = useRoute();
  
  const [cart, setCart] = useState([]); // Biến tạm để lưu trữ giỏ hàng

  const handleOrder = () => {
    Alert.alert(
      'Xác nhận thanh toán',
      'Bạn có chắc chắn muốn thanh toán không?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Thanh toán',
          onPress: () => {
            // Thực hiện xử lý thanh toán ở đây nếu cần
            // Sau đó, chuyển hướng về trang chủ
            Navigation.navigate('HomeScreem');
          },
        },
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    // Lấy dữ liệu từ AsyncStorage khi component được mount
    getData();
  }, []);

  useEffect(() => {
    // Lưu dữ liệu vào AsyncStorage mỗi khi cart thay đổi
    saveData();
  }, [cart]);
  // Hàm để thêm sản phẩm vào giỏ hàng tạm thời
  useEffect(() => {
    console.log('Sản phẩm đã được thêm vào giỏ hàng:', cart);
  }, [cart]); // useEffect này sẽ chạy mỗi khi giá trị của cart thay đổi

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          // Tăng số lượng của sản phẩm đã tồn tại trong giỏ hàng
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
  
      Navigation.navigate('ShoppingCart', { cart: updatedCart });
      setCart(updatedCart);
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      const newItem = { ...product, quantity };
      const updatedCart = [...cart, newItem];
  
      Navigation.navigate('ShoppingCart', { cart: updatedCart });
      setCart(updatedCart);
    }
  };
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

  const saveData = async () => {
    try {
      // Lưu dữ liệu vào AsyncStorage
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', error);
    }
  };
  
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const productId = Route.params?.productId; // Lấy ID sản phẩm từ Route.params

  // Tìm sản phẩm tương ứng với ID được chuyển từ MenuBody
  const selectedProduct = productsData.find(product => product.id === productId);
const totalPrice = selectedProduct.price * quantity;
  if (!selectedProduct) {
    return (
      <View style={styles.container}>
        <Text>Sản phẩm không tồn tại</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.productItem}>
        <Image
          source={{ uri: selectedProduct.img }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{selectedProduct.name}</Text>
          <Text style={styles.productPrice}>{selectedProduct.price}k</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.payContainer}>
        <View style={styles.payTotal}>
          <Text style={styles.totalText}>Tổng Cộng:</Text>
          <Text style={styles.priceText}>{totalPrice}k</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.buyButton, { backgroundColor: '#e31837' }]}
          onPress={() => addToCart(selectedProduct, quantity)}
        >
          <Text style={styles.buyButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buyButton, { backgroundColor: '#e31837' }]}
          >
            <Text style={styles.buyButtonText}
            onPress={handleOrder}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
    
      productImage:{
        width:350,
        height:350,
      },
      
      productName:{
        fontWeight:'bold',
        fontSize:20,
      },
      productPrice:{
        color:'#e31837',
        fontWeight:'bold',
        fontSize:20,
      },
      quantityContainer: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        paddingTop: 30,
        borderBottomWidth: 1,
        borderColor: 'e31837',
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
export default DTHeader;