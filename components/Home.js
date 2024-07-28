import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

//importing util data
import { sliderData, trendingData, matchData } from "../dataUtils";

//components
import ConfirmationModal from "./ConfirmationModal";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const openModal = (match) => {
    setSelectedMatch(match);
    setModalVisible(true);
  };

  // Render Trending Item
  const firstRow = trendingData.slice(0, 5);
  const secondRow = trendingData.slice(5);

  //Yes / No Card
  const renderMatchItem = ({ item }) => (
    <View style={styles.matchCard}>
      <View style={styles.matchInfo}>
        <View>
          <Text style={styles.matchTitle}>{item.title}</Text>
          <Text style={styles.matchSubtitle}>{item.subtitle}</Text>
        </View>
        <Image source={item.image} style={styles.matchImage} />
      </View>
      <View style={styles.matchButtons}>
        <TouchableOpacity onPress={() => openModal(item)} style={styles.yesBtn}>
          <Text style={styles.yes}>Yes $ 5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal(item)} style={styles.noBtn}>
          <Text style={styles.no}>No $ 4.7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
      />
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {sliderData.map((item) => (
          <View key={item.key} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Trending Now Card*/}
      <View style={styles.trendingContainer}>
        <Text style={styles.Title}>Trending Now</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.trendingRow}>
              {firstRow.map((item) => (
                <View key={item.key} style={styles.trendingCard}>
                  <Image source={item.image} style={styles.trendingImage} />
                  <Text style={styles.trendingText}>{item.text}</Text>
                </View>
              ))}
            </View>
            <View style={styles.trendingRow}>
              {secondRow.map((item) => (
                <View key={item.key} style={styles.trendingCard}>
                  <Image source={item.image} style={styles.trendingImage} />
                  <Text style={styles.trendingText}>{item.text}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
            
      {/* YES NO CARD */}
      <View style={styles.matchContainer}>
        <Text style={styles.Title}>IPL Teams Playing</Text>
        <FlatList
          data={matchData}
          renderItem={renderMatchItem}
          keyExtractor={(item) => item.key}
        />
      </View>

      {selectedMatch && (
        <ConfirmationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          matchData={selectedMatch}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eaeaea",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 20,
  },
  slider: {
    marginBottom: 20,
  },
  card: {
    width: 80,
    height: 60,
    borderRadius: 15,
    backgroundColor: "white",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 30,
    height: 30,
    marginBottom:5,
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    justifyContent: "space-around",
  },
  trendingContainer:{
    marginBottom:15,
  },
  trendingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  trendingList: {
    paddingBottom: 10,
  },
  trendingCard: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexShrink: 1,
    height: 50,
  },
  trendingImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  matchCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  matchInfo: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  matchSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  matchImage: {
    width: 50,
    height: 50,
  },
  matchButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yesBtn: {
    borderRadius: 10,
    width: 150,
    padding: 10,
    margin: 5,
    alignItems: "center",
    backgroundColor: "#C2E2F5",
  },
  noBtn: {
    borderRadius: 10,
    width: 150,
    padding: 10,
    margin: 5,
    alignItems: "center",
    backgroundColor: "#FB8DA0",
  },
  yes: {
    color: "#0000FF",
    fontSize: 16,
    fontWeight: "bold",
  },
  no: {
    color: "#FB4570",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
