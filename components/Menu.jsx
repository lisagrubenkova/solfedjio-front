import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export const Menu = ({setCurrentScreen, currentScreen}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.level} onPress={() => {setCurrentScreen('Levels')
        }}>
               { currentScreen == 'Levels' ? <Image style = {styles.img}
      source={require('./imgs/levels_active.png')}/> :  <Image style = {styles.img}
      source={require('./imgs/levels.png')}/>
    }
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {setCurrentScreen('Rewards')}}>
                { currentScreen == 'Rewards' ? <Image style = {styles.img}
      source={require( './imgs/reward_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/reward.png' )}/> }
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {setCurrentScreen('Theory');}}>
                { currentScreen == 'Theory' ? <Image style = {styles.img}
      source={require( './imgs/book_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/book.png' )}/>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.level} onPress={() => {setCurrentScreen('User');}}>
                { currentScreen == 'User' ? <Image style = {styles.img}
      source={require( './imgs/user_active.png' )}/> : <Image style = {styles.img}
      source={require( './imgs/user.png' )}/> }
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#878787',
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