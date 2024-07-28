// components/Footer.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Ionicons name="home-outline" size={30} color="#00000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search-outline" size={30} color="#00000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="trophy-outline" size={30} color="#00000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="bag-handle-outline" size={30} color="#00000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="wallet-outline" size={30} color="#00000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1.5,
    borderColor: '#00000',
  },
});

export default Footer;
