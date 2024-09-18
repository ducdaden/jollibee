import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuBody = () => {
  const productsData = require('./food.json');

  const Navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.Container}>
        {productsData.map(product => (
          <View style={styles.productItem} key={product.id}>
            <Image
              source={{ uri: product.img }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}k</Text>
              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('FoodDatail', {
                    productId: product.id,
                    initialPrice: product.price, // Truyền giá sản phẩm vào đây
                  });
                }}
                style={[styles.buyButton, { backgroundColor: '#e31837' }]}
              >
                <Text style={styles.buyButtonText}>Mua ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    Container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop: 10,
        backgroundColor:'#E1E8EA',
        
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
      buyButton: {
        width:'50%',
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

export default MenuBody;