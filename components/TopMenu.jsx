import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export const TopMenu = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/info.png' )}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
                <Image style = {styles.img}
      source={require( './imgs/star.png' )}/>
      </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#878787',
        width: 390,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      img: {
        width: 40,
        height: 40,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 25
      }
})