import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { Menu } from './Menu';
import { useState } from 'react';
export const User = ({navigation}) => {
    const [levelsActive, setLevelsActive] = useState(false);
    const [rewardActive, setRewardActive] = useState(false);
    const [theoryActive, setTheoryActive] = useState(false);
    const [userActive, setUserActive] = useState(true);
    return (
        <View style={styles.container}>
            <ScrollView>

            </ScrollView>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  