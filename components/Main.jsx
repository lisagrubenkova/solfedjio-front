import { TopMenu } from './TopMenu';
import { Levels } from './Levels';
import { Rewards } from './Rewards';
import { Theory } from './Theory';
import { User } from './User';
import { Menu } from './Menu';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

export const Main = () => {
    // const [levelsActive, setLevelsActive] = useState(true);
    // const [rewardActive, setRewardActive] = useState(false);
    // const [theoryActive, setTheoryActive] = useState(false);
    // const [userActive, setUserActive] = useState(false);

    const [currentScreen, setCurrentScreen] = useState('Levels');

    return (
        <View style={styles.container}>
            <TopMenu/>
             {currentScreen === 'Levels' ? <Levels /> : null}
             {currentScreen === 'Rewards' ? <Rewards /> : null}
             {currentScreen === 'Theory' ? <Theory /> : null}
             {currentScreen === 'User' ? <User /> : null}
          <Menu setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}  />
        </View>
    )
}

const styles = StyleSheet.create({
    level: {
     backgroundColor: '#FE7579',
     width: 80,
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
  