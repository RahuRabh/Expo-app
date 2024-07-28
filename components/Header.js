// components/Header.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
