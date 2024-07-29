import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CategoryItem from '../components/CategoryItem'; 

// Import assets
import Avatar from '../assets/avatar.png';
import LocationIcon from '../assets/location-icon.png';
import NotificationIcon from '../assets/notification-icon.png';
import SearchIcon from '../assets/search-icon.png';
import ModifyIcon from '../assets/modify.png';
import PizzaIcon from '../assets/pizza-icon.png';
import BurgerIcon from '../assets/burger-icon.png';
import DrinkIcon from '../assets/drink-icon.png';
import RiceIcon from '../assets/rice-icon.png';
import Burger from '../assets/burger.png';
import StarIcon from '../assets/star-icon.png';
import Avatars from '../assets/avatas.png';
import Burger2 from '../assets/burger2.png';
import Pizza from '../assets/pizza.png';

const HomeScreen = () => {
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
            <View>
              <Image source={Avatar} style={styles.profilePic} />
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Your Location</Text>
              <View style={styles.locationInfo}>
                <Image source={LocationIcon} style={styles.icon} />
                <Text style={styles.locationText}>Savar, Dhaka</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image source={NotificationIcon} style={styles.notiIcon} />
            </TouchableOpacity>
          </LinearGradient>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Image source={SearchIcon} style={styles.icon} />
            <TextInput
              placeholder="Search your food"
              placeholderTextColor="#FFFFFF"
              style={styles.searchInput}
            />
            <Image source={ModifyIcon} style={styles.icon} />
          </View>
        </View>

        {/* Food Categories */}
        <View style={styles.categories}>
          <CategoryItem icon={PizzaIcon} title="PIZZA" isActive={true} />
          <CategoryItem icon={BurgerIcon} title="BURGER" />
          <CategoryItem icon={DrinkIcon} title="DRINK" />
          <CategoryItem icon={RiceIcon} title="RICE" />
        </View>

        {/* Hot Offer */}
        <View style={styles.offerCard}>
          <Image source={Burger} style={styles.offerImage} />
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>BURGER</Text>
            <Text style={styles.offerSubtitle}>Today's Hot offer</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.avatars}>
                <Image source={Avatars} />
              </View>
              <Image source={StarIcon} style={styles.starIcon} />
              <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
            </View>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>10% OFF</Text>
            </View>
          </View>
        </View>

        {/* Popular Items */}
        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popularItems}>
            <TouchableOpacity style={styles.popularItem} onPress={() => navigation.navigate('Cart')}>
              <Image source={Burger2} style={styles.popularItemImage} />
              <Text style={styles.popularItemText}>BURGER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popularItem}>
              <Image source={Pizza} style={styles.popularItemImage} />
              <Text style={styles.popularItemText}>PIZZA</Text>
            </TouchableOpacity>
          </View>
        </View>
 
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../assets/home-icon.png')} style={styles.navIcon1} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]} onPress={() => navigation.navigate('OrderScreen')}>
          <Image source={require('../assets/order-icon.png')} style={styles.navIcon2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('InboxScreen')}>
          <Image source={require('../assets/inbox-icon.png')} style={styles.navIcon3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
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
    background: '#FFFFFF',
    borderRadius: 20,
  },
  headerWrapper: {
    position: 'relative',
    marginBottom: 30, // Add some margin to push down the content below
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
  locationContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 49,
    height: 49,
    borderRadius: 20,
    marginRight: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  notiIcon: {
    width: 46,
    height: 46,
  },
  searchBar: {
    position: 'absolute',
    bottom: -35,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5D3EBD',
    borderRadius: 25,
    padding: 10,
    margin: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  offerCard: {
    position: 'relative',
    backgroundColor: '#333',
    borderRadius: 16,
    margin: 16,
    overflow: 'hidden',
    height: 165,
  },
  offerImage: {
    position: 'absolute',
    width: '100%',
    height: 165,
  },
  offerContent: {
    position: 'absolute',
    marginTop: 20,
    padding: 16,
  },
  offerTitle: {
    color: '#FFD804',
    fontSize: 24,
    fontWeight: 'bold',
  },
  offerSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatars: {
    flexDirection: 'row',
    marginRight: 8,
    height: 20,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  ratingText: {
    color: 'white',
    marginRight: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 15,
    right: -6,
    width: 52,
    height: 52,
    backgroundColor: '#4A43EC',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    width: 29,
    height: 32,
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  popularSection: {
    margin: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#606060',
  },
  popularItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItem: {
    width: '48%',
  },
  popularItemImage: {
    width: '100%',
    height: 117,
    borderRadius: 6,
  },
  popularItemText: {
    marginTop: 8,
    fontSize: 16,
    right: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default HomeScreen;
