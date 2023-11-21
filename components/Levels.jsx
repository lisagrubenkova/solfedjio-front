import { TopMenu } from './TopMenu';
import { Menu } from './Menu';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const Levels = ({navigation}) => {
    const [levelsActive, setLevelsActive] = useState(true);
    const [rewardActive, setRewardActive] = useState(false);
    const [theoryActive, setTheoryActive] = useState(false);
    const [userActive, setUserActive] = useState(false);
    return (
        <View style={styles.container}>
            <TopMenu/>
            <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={styles.level} onPress={() => navigation.navigate('Level1')}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.levelRight}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.levelRight}>
        <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity>
          </ScrollView>
          <Menu navigation={navigation} levelsActive={levelsActive} 
          setLevelsActive={setLevelsActive}
          rewardActive={rewardActive} setRewardActive={setRewardActive}
          theoryActive={theoryActive} setTheoryActive={setTheoryActive}
          userActive={userActive} setUserActive={setUserActive}/>
        </View>
    )
}

const styles = StyleSheet.create({
    level: {
     backgroundColor: '#FE7579',
     height: 75,
     borderRadius:20, 
     justifyContent: 'center',
     marginLeft: 45,
     marginTop: 20
    },
    levelRight: {
        backgroundColor: '#FE7579',
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginLeft: 265,
        marginTop: 20
    },
    levelRightDisabled: {
        backgroundColor: '#ACA3A3',
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginLeft: 265,
        marginTop: 20
    },
    buttonText: {
        fontSize: 50,
        alignSelf: 'center'
    },
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'CFCFCF',
    },
    text: {
      fontSize: 42,
    },
  });
  