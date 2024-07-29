// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen';
// import OrderScreen from './screens/OrderScreen';
// import InboxScreen from './screens/InboxScreen';
// import ProfileScreen from './screens/ProfileScreen';

// import HomeIcon from './assets/home-icon.png';
// import OrderIcon from './assets/order-icon.png';
// import InboxIcon from './assets/inbox-icon.png';
// import ProfileIcon from './assets/profile-icon.png';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = HomeIcon;
//             } else if (route.name === 'Order') {
//               iconName = OrderIcon;
//             } else if (route.name === 'Inbox') {
//               iconName = InboxIcon;
//             } else if (route.name === 'Profile') {
//               iconName = ProfileIcon;
//             }

//             return <Image source={iconName} style={styles.icon} />;
//           },
//           tabBarActiveTintColor: '#5D3EBD',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: styles.tabBar,
//           tabBarItemStyle: styles.tabBarItem,
//           tabBarLabel: () => null, // Hide tab labels
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name="Order" component={OrderScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   icon: {
//     width: 29,
//     height: 36,
//   },
//   tabBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     width: 375,
//     height: 60,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     paddingHorizontal: 20,
//   },
//   tabBarItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default App;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

