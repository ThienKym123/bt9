import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import InboxScreen from './screens/InboxScreen';
import ProfileScreen from './screens/ProfileScreen';

import HomeIcon from './assets/home-icon.png';
import OrderIcon from './assets/order-icon.png';
import InboxIcon from './assets/inbox-icon.png';
import ProfileIcon from './assets/profile-icon.png';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? HomeIcon : HomeIcon;
            } else if (route.name === 'Order') {
              iconName = focused ? OrderIcon : OrderIcon;
            } else if (route.name === 'Inbox') {
              iconName = focused ? InboxIcon : InboxIcon;
            } else if (route.name === 'Profile') {
              iconName = focused ? ProfileIcon : ProfileIcon;
            }

            return <Image source={iconName} style={{ width: 29, height: 36 }} />;
          },
          tabBarActiveTintColor: '#5D3EBD',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            // Căn chỉnh Bottom Tab
            position: 'absolute', // Căn chỉnh tuyệt đối
            bottom: 0, // Vị trí ở dưới cùng
            left: 0, // Vị trí ở bên trái
            right: 0, // Vị trí ở bên phải
            width: 375, // Chiều rộng chiếm toàn bộ màn hình
            height: 60, // Chiều cao của Bottom Tab
            backgroundColor: '#FFFFFF', // Màu nền
            borderTopWidth: 1, // Độ dày của viền trên
            borderTopColor: '#E0E0E0', // Màu viền trên
            paddingHorizontal: 20, // Khoảng cách giữa icon và cạnh trái/phải
          },
          tabBarItemStyle: {
            // Căn chỉnh mỗi item trong Bottom Tab
            flex: 1, // Chiều rộng của mỗi item
            alignItems: 'center', // Căn chỉnh icon và text theo chiều dọc
          },
          tabBarLabel: () => null, // Ẩn tiêu đề của tab
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
