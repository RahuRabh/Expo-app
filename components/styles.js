// styles.js
import { StyleSheet } from 'react-native';




export const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  footer: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    height: 200,
    backgroundColor: '#ccc',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    marginVertical: 10,
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  trendingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  trendingCard: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  trendingImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  trendingText: {
    flexShrink: 1,
  },
  matchCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchInfo: {
    flex: 1,
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  matchImage: {
    width: 50,
    height: 50,
  },
  matchButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
});
