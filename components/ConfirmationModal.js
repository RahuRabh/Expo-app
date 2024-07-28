import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

const ConfirmationModal = ({ visible, onClose, matchData }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [swipeComplete, setSwipeComplete] = useState(false);

  useEffect(() => {
    if (!visible) {
      setActiveButton(null);
      setSliderValue(0);
      setSwipeComplete(false);
    }
  }, [visible]);

  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  const handleSwipe = () => {
    setSwipeComplete(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const activeValue = activeButton === 'yes' ? 5 : activeButton === 'no' ? 0 : 4 ;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.overlay}>
        <Pressable style={modalStyles.centeredView} onPress={onClose}>
          <Pressable style={modalStyles.modalView} onPress={() => {}}>
            {/* Title Section */}
            <View style={modalStyles.header}>
              <Text style={modalStyles.modalText}>{matchData.title}</Text>
              <Image source={matchData.image} style={modalStyles.matchImage} />
            </View>
            <View style={modalStyles.buttonRow}>
              <TouchableOpacity
                style={[modalStyles.button, activeButton === 'yes' && modalStyles.activeYesButton]}
                onPress={() => handleButtonPress('yes')}
              >
                <Text style={modalStyles.textStyle}>Yes 5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, activeButton === 'no' && modalStyles.activeNoButton]}
                onPress={() => handleButtonPress('no')}
              >
                <Text style={modalStyles.textStyle}>No 4</Text>
              </TouchableOpacity>
            </View>

            {/* Price Card Section */}
            <View style={modalStyles.card}>
              <View style={modalStyles.priceRow}>
                <Text style={modalStyles.cardText}>Price</Text>
                <Text style={modalStyles.cardText}>{activeValue}</Text>
              </View>
              <View style={modalStyles.sliderRow}>
                <View style={modalStyles.sliderBox}>
                  <Text style={modalStyles.sliderSign}>-</Text>
                </View>
                <Slider
                  style={modalStyles.slider}
                  minimumValue={3}
                  maximumValue={10}
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  minimumTrackTintColor="gray"
                  maximumTrackTintColor="#000000"
                />
                <View style={modalStyles.sliderBox}>
                  <Text style={modalStyles.sliderSign}>+</Text>
                </View>
              </View>
              <Text style={modalStyles.arrow}>------------------------------</Text>
              <View style={modalStyles.valueRow}>
                <Text style={modalStyles.valueText}>{activeValue} You put</Text>
                <Text style={modalStyles.valueText}>10 You get</Text>
              </View>
            </View>

            {/* Swipe Button Section */}
            <View style={[modalStyles.swipeButton, swipeComplete && modalStyles.swipeComplete]}>
              <TouchableOpacity onPress={handleSwipe} style={modalStyles.swipeButtonText}>
                <Text style={modalStyles.swipeButtonText}>
                  {swipeComplete ? 'Order Success' : 'Swipe for Yes →'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text>Available Balance: 400.00</Text>
          </Pressable>
        </Pressable>
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  matchImage: {
    width: 50,
    height: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#2196F3',
    width: 150,
  },
  activeYesButton: {
    backgroundColor: 'blue',
  },
  activeNoButton: {
    backgroundColor: 'pink',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    width: 350,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderBox: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  sliderSign: {
    fontSize: 18,
    color: 'white',
  },
  slider: {
    flex: 1,
  },
  arrow: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 10,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 16,
  },
  swipeButton: {
    width: 350,
    height: 60,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:30,
  },
  swipeComplete: {
    backgroundColor: 'green',
  },
  swipeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignItems:'center',
  },
});

export default ConfirmationModal;
