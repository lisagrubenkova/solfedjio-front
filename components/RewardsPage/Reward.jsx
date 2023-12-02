import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';


export const Reward = (props) => {
    return(
        <View>
        <TouchableOpacity style={styles.reward} onPress={() => navigation.navigate('Level1')}>
      </TouchableOpacity>
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
    },
  });
  