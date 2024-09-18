import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PromotionBody = () => {
  const promoData = require('./Promo.json'); // Import dữ liệu từ file JSON

  const Navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {promoData.map(promo => ( // Lặp qua các mục trong JSON
          <View style={styles.productItem} key={promo.id}>
            <View style={styles.productInfo}>
              <Image
                source={{ uri: promo.img }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{promo.name}</Text>
              <TouchableOpacity
                
                style={[styles.buyButton, { backgroundColor: '#e31837' }]}
              >
                <Text style={styles.buyButtonText}>Tìm hiểu thêm</Text>
              </TouchableOpacity>
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
    backgroundColor: '#E1E8EA',
  },
  upperPart: {
    alignItems: 'center',
  },
  lowerPart: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10,
    marginTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
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
  buyButton: {
    width: '50%',
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

export default PromotionBody;
