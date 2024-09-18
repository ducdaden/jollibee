import React,{useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from './components/HomeScreem/header';
import Body from './components/HomeScreem/body';
import Footer from './components/HomeScreem/footer';
import LoginForm from './components/Login';
import MenuHeader from './components/MenuFood/header';
import DTHeader from './components/FoodDatail/DTheader';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuBody from './components/MenuFood/body';
import PromotionHeader from './components/Promotion/PromotionHeader';
import PromotionBody from './components/Promotion/PromotionBody';
import ProfileForm from './components/Profile';
import CartHeader from './components/ShoppingCart/cartHeader';
import CartBody,{totalPrice} from './components/ShoppingCart/cartBody';
import CartFooter from './components/ShoppingCart/cartFooter';



const HomeScreem = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Body />
        <Footer />
      </ScrollView>
    </View>
  );
};
const MenuFood = () => {
  return (
    <View style={styles.container}>
      <MenuHeader />
      <MenuBody />
    </View>
  );
};
const FoodDatail = () => {
  return (
    <View style={styles.container}>
      <DTHeader />
    </View>
  );
};
const PromoScreem = () => {
  return (
    <View style={styles.container}>
      <PromotionHeader />
      <PromotionBody />
    </View>
  );
};
const ProfileScreem = () => {
  return (
    <View style={styles.container}>
      <ProfileForm />
    </View>
  );
};
const ShoppingCart = () => {
  const route = useRoute();
  const [cartData, setCartData] = useState(route.params?.cart || []);

  const updateCart = (updatedCart) => {
    setCartData(updatedCart);
  };

  return (
    <View style={styles.container}>
      <CartHeader />
      <View style={styles.body}>
        <CartBody cartData={cartData} updateCart={updateCart} />
      </View>
      <CartFooter cartData={cartData} />
    </View>
  );
};


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false, // Tắt header mặc định
        }}>
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="HomeScreem" component={HomeScreem} />
          <Stack.Screen name="MenuFood" component={MenuFood} />
          <Stack.Screen name="FoodDatail" component={FoodDatail} />
          <Stack.Screen name="PromoScreem" component={PromoScreem} />
          <Stack.Screen name="ProfileScreem" component={ProfileScreem} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 5, 
  },
});
