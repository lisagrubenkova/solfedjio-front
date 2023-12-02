import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Modal, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import { useState } from 'react';
export const Rewards = () => {
    const state = {
        Rewards: [
            {
                id: 1,
                img: './Trophy1.png',
                text: 'За пройденный первый уровень'
            },
            {
                id: 2,
                img: '../img/Trophy1.svg',
                text: 'За пройденный второй уровень'
            },
            {
                id: 3,
                img: '../img/Trophy1.svg',
                text: 'За пройденный второй уровень'
            },
            {
                id: 4,
                img: '../img/Trophy1.svg',
                text: 'За пройденный второй уровень'
            }
        ]
    }
    const [modalVisible, setModalVisible] = useState(false);
   //const RewardsElements = state.Rewards.map(reward => <TouchableOpacity style={styles.reward} onPress={() => navigation.navigate('Level1')}>
   //     <Image source={require(reward.img)}/>
   // </TouchableOpacity>)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rewardsList}>
                    <TouchableOpacity style={styles.reward} onPress={() => setModalVisible(true)}>
        <Image style={styles.img} source={require('./Trophy1.png')}/>
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
            <Image style={styles.modalImg} source={require('./Trophy1.png')} />
            <Text style={styles.modalText}>Новичок в своем деле</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Trophy2.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Trophy3.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Trophy4.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Trophy5.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Ribbon1.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Ribbon2.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Ribbon3.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reward}>
        <Image style={styles.img} source={require('./Ribbon4.png')}/>
    </TouchableOpacity>
                {/* {RewardsElements} */}
                </View>
            </ScrollView>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rewardsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
    },
    reward: {
        width: 100,
        height: 100,
        backgroundColor: '#A19B9B',
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center'
    },
    img: {
        alignSelf: 'center',
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
  });
  