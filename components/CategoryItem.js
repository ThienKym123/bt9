// CategoryItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = ({ icon, title, isActive }) => {
  return (
    <TouchableOpacity style={[styles.categoryItem, isActive && styles.activeCategory]}>
      <Image source={icon} style={[styles.categoryIcon, isActive && styles.activeIcon]} />
      <Text style={[styles.categoryText, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 86, // Chiều rộng của hình chữ nhật
    height: 96, // Chiều cao của hình chữ nhật
    backgroundColor: '#F5F5F5', // Màu nền
    borderRadius: 6, // Bo tròn góc
    shadowColor: '#000', // Màu của bóng đổ
    shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của bóng đổ
    shadowOpacity: 0.2, // Độ mờ của bóng đổ
    shadowRadius: 4, // Bán kính của bóng đổ
    elevation: 5, // Độ cao của bóng đổ (cho Android)
    margin: 8,
  },
  activeCategory: {
    backgroundColor: '#29D697',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 13,
    color: '#000',
  },
  activeText: {
    color: '#FFFFFF', // Màu chữ trắng khi active
  },
  categoryIcon: {
    // width: 25, // Cập nhật kích thước của biểu tượng
    height: 30,
  },
  activeIcon: {
    tintColor: '#FFFFFF', // Màu của biểu tượng trắng khi active
  },
});

export default CategoryItem;
