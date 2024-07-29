import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Bin from '../assets/bin.png';
import BackIcon from '../assets/back-icon.png'; // Ensure you have a back icon
import Burger3 from '../assets/burger3.png'; // Ensure you have a burger image
import StarIcon from '../assets/star-icon.png';
import Plus from '../assets/plus.png';
import Minus from '../assets/minus.png';
import Edit from '../assets/edit.png';
import Card from '../assets/card.png';


const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <LinearGradient
            colors={['#E6E6E6', '#FEFFBF']}
            style={styles.header}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={BackIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Shopping Cart</Text>
            <TouchableOpacity>
              <Image source={Bin} style={styles.bin} />
            </TouchableOpacity>
          </LinearGradient>
          <Image source={Burger3} style={styles.burgerImage} />
          
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>10% OFF</Text>
            </View>
        </View>

        <View style={styles.content}>
          <View style={styles.burgerCard}>
            
            <View style={styles.miniImagesContainer}>
              <Image source={require('../assets/mini-burger1.png')} style={styles.miniBurgerImage} />
              <Image source={require('../assets/mini-burger2.png')} style={styles.miniBurgerImage} />
              <Image source={require('../assets/mini-burger3.png')} style={styles.miniBurgerImage} />
            </View>
          </View>

          <View style={styles.burgerDetails}>
            <View style={styles.burgerNamePrice}>
              <Text style={styles.burgerName}>BURGER</Text>
              <Text style={styles.burgerPrice}>$28</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Image source={require('../assets/star-icon.png')} style={styles.starIcon} />
              <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>02</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.addressContainer}>
            <View style={styles.addressTextContainer}>
              <Image source={require('../assets/location-icon.png')} style={styles.locationIcon} />
              <View>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Image source={require('../assets/edit.png')} style={styles.editIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentMethodContainer}>
            <Image source={require('../assets/card.png')} style={styles.cardIcon} />
            <Text style={styles.paymentMethodText}>Payment Method</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Checkout Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal (2)</Text>
              <Text style={styles.summaryValue}>$56</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$6.20</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Payable Total</Text>
              <Text style={styles.totalValue}>$62.2</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/home-icon.png')} style={styles.navIcon1} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Image source={require('../assets/order-icon.png')} style={styles.navIcon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/inbox-icon.png')} style={styles.navIcon3} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/profile-icon.png')} style={styles.navIcon4} />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 375,
    height: 812,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  headerWrapper: {
    position: 'relative',
    width: 375,
    height: 179,
    top: -8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    height: 120,
  },
  backIcon: {
    width: 18,
    height: 14,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bin: {
    width: 30,
    height: 28,
  },
  burgerImage: {
    position: 'absolute',
    width: 327,
    height: 214,
    top: 90,
    left: 24,
    borderRadius: 12,
    zIndex: 1,
  },
  content: {
    width: 327,
    height: 600,
    top: 100, 
    left: 24,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    zIndex: 0,
    padding: 30,
  },
  discountBadge: {
    position: 'absolute',
    top: 100,
    left: 50,
    backgroundColor: '#6B50F6',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  miniImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },
  miniBurgerImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  burgerDetails: {
    marginTop: 30,
    marginBottom: 20,
  },
  burgerNamePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  burgerName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  burgerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B50F6',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  ratingText: {
    color: '#808080',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#6B50F6',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 18,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6FEF6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  addressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  addressLabel: {
    color: '#808080',
    fontSize: 12,
  },
  addressText: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#A9A6FF',
    borderRadius: 10,
    padding: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  paymentMethodText: {
    flex: 1,
  },
  changeText: {
    color: '#6B50F6',
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryLabel: {
    color: '#808080',
  },
  totalRow: {
    marginTop: 10,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
    color: '#6B50F6',
  },
  confirmButton: {
    backgroundColor: '#6B50F6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
    top: -30,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon1: {
    width: 29,
    height: 36,
  },
  navIcon2: {
    width: 34,
    height: 38,
  },
  navIcon3: {
    width: 32,
    height: 36,
  },
  navIcon4: {
    width: 41,
    height: 36,
  },
});

export default CartScreen;