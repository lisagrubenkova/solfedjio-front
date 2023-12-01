import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { Menu } from './Menu';
import { useState } from 'react';
export const Rewards = ({navigation}) => {
    const [levelsActive, setLevelsActive] = useState(false);
    const [rewardActive, setRewardActive] = useState(true);
    const [theoryActive, setTheoryActive] = useState(false);
    const [userActive, setUserActive] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rewardsList}>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                <TouchableOpacity style={styles.reward}/>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    reward: {
        width: 100,
        height: 100,
        backgroundColor: '#A19B9B',
        margin: 10,
        borderRadius: 20,
    },
    rewardsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
    }
  });
  