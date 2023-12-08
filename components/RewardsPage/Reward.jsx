import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Modal, TouchableWithoutFeedback, Text } from 'react-native';
import { useState } from 'react';

export const Reward = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
         <TouchableOpacity style={styles.reward} onPress={() => setModalVisible(true)}>
        <Image style={styles.img} source={props.img}/>
    </TouchableOpacity>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.modalImg} source={(props.img)} />
            <Text style={styles.modalText}>{props.text}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  reward: {
    width: 100,
    height: 100,
    backgroundColor: '#A19B9B',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  modalView: {
    backgroundColor: '#CFCFCF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
  },
  img: {
    alignSelf: 'center',
  }
});