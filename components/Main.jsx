import { TopMenu } from './TopMenu';
import { Levels } from './LevelsPage/Levels';
import { Rewards } from './RewardsPage/Rewards';
import { Theory } from './TheoryPage/Theory';
import { User } from './User';
import { Menu } from './Menu';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

export const Main = ({navigation}) => {
    // const [levelsActive, setLevelsActive] = useState(true);
    // const [rewardActive, setRewardActive] = useState(false);
    // const [theoryActive, setTheoryActive] = useState(false);
    // const [userActive, setUserActive] = useState(false);

    const [currentScreen, setCurrentScreen] = useState('Levels');

    return (
        <View style={styles.container}>
            <TopMenu/>
             {currentScreen === 'Levels' ? <Levels navigation={navigation}/> : null}
             {currentScreen === 'Rewards' ? <Rewards /> : null}
             {currentScreen === 'Theory' ? <Theory navigation={navigation}/> : null}
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
  