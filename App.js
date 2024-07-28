import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
