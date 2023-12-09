import { TopMenu } from './TopMenu';
import { Levels } from './LevelsPage/Levels';
import { Rewards } from './RewardsPage/Rewards';
import { Theory } from './TheoryPage/Theory';
import { User } from './User';
import { Menu } from './Menu';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';

export const Main = ({navigation}) => {

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
    container: {
      flex: 1,
    },
  });
  