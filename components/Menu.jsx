import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export const Menu = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/levels.png' )}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/reward.png' )}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/book.png' )}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/user.png' )}/>
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