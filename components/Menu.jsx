import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export const Menu = ({ levelsActive,
    setLevelsActive,
    rewardActive,
    setRewardActive,
    theoryActive,
    setTheoryActive,
    userActive,
    setUserActive, navigation }) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.level} onPress={() => {
          navigation.navigate('Levels');
          setLevelsActive(true);
          setRewardActive(false);
          setTheoryActive(false);
          setUserActive(false);
        }}>
               { levelsActive ? <Image style = {styles.img}
      source={require('./imgs/levels_active.png')}/> :  <Image style = {styles.img}
      source={require('./imgs/levels.png')}/>
    }
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {navigation.navigate('Rewards'); setLevelsActive(false);
          setRewardActive(true);
          setTheoryActive(false);
          setUserActive(false);}}>
                { rewardActive ? <Image style = {styles.img}
      source={require( './imgs/reward_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/reward.png' )}/> }
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {navigation.navigate('Theory'); setLevelsActive(false);
          setRewardActive(false);
          setTheoryActive(true);
          setUserActive(false);}}>
                { theoryActive ? <Image style = {styles.img}
      source={require( './imgs/book_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/book.png' )}/>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {navigation.navigate('User'); setLevelsActive(false);
          setRewardActive(false);
          setTheoryActive(false);
          setUserActive(true);}}>
                { userActive ? <Image style = {styles.img}
      source={require( './imgs/user_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/user.png' )}/> }
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#878787',
        width: 390,
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35
      },
      img: {
        width: 40,
        height: 40,
      }
})